import React, { useState, useEffect, useRef } from "react";
import "./assetcard.css";
import AddIcon from "../../../assets/images/add-icon.svg";
import MessageIcon from "../../../assets/images/message-icon.svg";
import EditIcon from "../../../assets/images/p-edit-icon.svg";
import DeleteIcon from "../../../assets/images/delete-icon.svg";
import SmallPlayIcon from "../../../assets/images/small-play-icon.svg";
import MyModal from "../../modal/Modal";
import {
  createLiability,
  getLiabilityByUserId,
} from "../../../services/liability";
import ArrowPointer from "../../../assets/images/arrow-pointer.svg";

function LiabilitiesCard({ setTotalLiability }) {
  const [showModal, setShowModal] = useState(false);
  const [addNewCategoryModal, setAddNewCategoryModal] = useState(false);
  const [addNewSubCategoryModal, setAddNewSubCategoryModal] = useState(false);
  const [total, setTotal] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [types, setTypes] = useState([]);
  const [modalFields, setModalFields] = useState([
    {
      categoryName: "Loans",
      fields: [
        { fieldName: "Housing Loan", id: 2, value: "", ref: useRef(null) },
        { fieldName: "Student Loan", id: 3, value: "", ref: useRef(null) },
        { fieldName: "Car", id: 4, value: "", ref: useRef(null) },
        { fieldName: "Personal", id: 5, value: "", ref: useRef(null) },
        { fieldName: "Payday Loan", id: 6, value: "", ref: useRef(null) },
      ],
      id: 1,
    },
    {
      categoryName: "Cards",
      fields: [
        { fieldName: "Credit Cards", id: 8, value: "", ref: useRef(null) },
        { fieldName: "Store Cards", id: 9, value: "", ref: useRef(null) },
      ],
      id: 7,
    },
    {
      categoryName: "Financed Purchases",
      fields: [
        { fieldName: "Appliances", id: 11, value: "", ref: useRef(null) },
        { fieldName: "Furniture", id: 12, value: "", ref: useRef(null) },
        { fieldName: "Phone", id: 13, value: "", ref: useRef(null) },
        {
          fieldName: "Clothing (Klarna?)",
          id: 14,
          value: "",
          ref: useRef(null),
        },
      ],
      id: 10,
    },
    {
      categoryName: "Misc Debts",
      fields: [
        { fieldName: "Overdraft", id: 16, value: "", ref: useRef(null) },
        { fieldName: "Back Bills", id: 17, value: "", ref: useRef(null) },
        {
          fieldName: "Money owed",
          id: 18,
          value: "",
          ref: useRef(null),
        },
      ],
      id: 15,
    },
  ]);

  const getUserLiabilityFromBackend = async () => {
    const res = await getLiabilityByUserId(localStorage.getItem("id"));
    if (
      res &&
      res.data &&
      res.data.data &&
      res.data.data.foundLiability &&
      res.data.data.foundLiability.liabilities
    ) {
      const data = res.data.data.foundLiability.liabilities;
      const g = data.map((d) => ({
        categoryName: d.categoryName,
        id: d._id,
        fields: d.fields.map((g) => ({
          value: g.value,
          fieldName: g.fieldName,
          id: g._id,
        })),
      }));
      setTypes(g);
    }
  };

  useEffect(() => {
    if (types && types.length > 0) {
      const total = types
        .filter((f) => f.fields.length > 0)
        .map((t) => t.fields.map((t) => (t.value ? t.value : 0)))
        .flat(1)
        .reduce((prev, current) => parseInt(prev) + parseInt(current));
      setTotal(total);
      setModalFields(types);
      setTotalLiability(total);
      console.log(total);
    }

    // setTotal(total);
  }, [types]);

  useEffect(() => {
    if (localStorage.getItem("id")) {
      getUserLiabilityFromBackend();
    }
  }, []);

  const onAddNewCategoryCompleted = () => {
    setModalFields((prev) => [
      ...prev,
      {
        id: new Date().getMilliseconds() + Math.random(),
        categoryName: categoryNameFields[0].ref.current.input?.value,
        fields: [],
      },
    ]);
    setAddNewCategoryModal(false);
  };

  const categoryNameFields = [
    {
      fieldName: "categoryName",
      label: "Category Name",
      ref: useRef(null),
      type: "text",
    },
  ];

  const assetFields = [
    {
      fieldName: "subCategoryName",
      label: "Sub Category Name",
      ref: useRef(null),
      type: "text",
      value: "",
    },
    {
      fieldName: "categoryName",
      label: "Sub Category Value",
      ref: useRef(null),
      type: "number",
      value: "",
    },
  ];

  const onAddNewSubCategoryCompleted = () => {
    const f = modalFields.map((t) => {
      if (t.id === selectedCategoryId) {
        t.fields = [
          ...t.fields,
          {
            id: new Date().getMilliseconds() + Math.random(),
            fieldName: assetFields[0].ref.current.input.value,
            ref: assetFields[1].ref,
            value: assetFields[1].ref.current.input.value,
          },
        ];
        return t;
      }
      return t;
    });
    console.log(f, selectedCategoryId);
    setModalFields(f);
    setAddNewSubCategoryModal(false);
  };

  const onAddNewSubCategory = (categoryId) => {
    setAddNewSubCategoryModal(true);
    setSelectedCategoryId(categoryId);
  };

  const onChangeSubcategoryValueField = (categoryId, subCategoryId, value) => {
    console.log(categoryId, subCategoryId, value);
    const l = modalFields.map((g) => {
      if (g.id === categoryId) {
        g.fields = g.fields.map((t) => {
          if (t.id === subCategoryId) {
            t.value = value;
            return t;
          }
          return t;
        });
        return g;
      }
      return g;
    });
    setModalFields(l);
  };

  const createLiabilityFromBack = async (values) => {
    const total = values
      .filter((f) => f.fields.length > 0)
      .map((t) => t.fields.map((t) => (t.value ? t.value : 0)))
      .flat(1)
      .reduce((prev, current) => parseInt(prev) + parseInt(current));

    await createLiability({
      user: localStorage.getItem("id"),
      total,
      liabilities: values.map((c) => ({
        ...c,
        fields: c.fields.map((d) => ({
          fieldName: d.fieldName,
          value: d.value,
        })),
      })),
    });
    getUserLiabilityFromBackend();
  };

  const deleteType = (t) => {
    const newt = types.filter((ty) => ty.id !== t.id);
    const newm = modalFields.filter((ty) => ty.id !== t.id);
    setModalFields(newm);
    setTypes(newt);
    createLiabilityFromBack(newm);
  };

  return (
    <div className="assetCard-container">
      {console.log("modal fields", modalFields)}
      <MyModal
        visible={showModal}
        setVisible={setShowModal}
        simple={false}
        title="Liabilities"
        modalFields={modalFields}
        onAdvanceModalCompleteFromBack={createLiabilityFromBack}
        // adding new category functionality
        onAddNewCategory={() => setAddNewCategoryModal(true)}
        addNewCategoryText="Add a new Liabilities category"
        // add new subcategory functionality
        onAddNewSubCategory={onAddNewSubCategory}
        // on change subcategory field
        onChangeSubcategoryValueField={onChangeSubcategoryValueField}
      />
      <MyModal
        visible={addNewCategoryModal}
        setVisible={setAddNewCategoryModal}
        simple={true}
        title="Create New Category"
        modalFields={categoryNameFields}
        handleCompleted={onAddNewCategoryCompleted}
      />
      <MyModal
        visible={addNewSubCategoryModal}
        setVisible={setAddNewSubCategoryModal}
        simple={true}
        title="Create New Sub Category"
        modalFields={assetFields}
        handleCompleted={onAddNewSubCategoryCompleted}
      />
      <div className="assetCard-top">
        <div>
          <h2>Liabilities</h2>
          <span
            style={{
              color: "#312B2B",
              fontWeight: "500",
              marginLeft: "20px",
              marginTop: "-15px",
            }}
          >
            <img
              src={SmallPlayIcon}
              alt="play"
              style={{ marginRight: "10px" }}
            />
            Video Tutorial
          </span>
        </div>
        <div>
          <p
            style={{
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "14px",
              letterSpacing: "0.01em",
              background: "#F2F9FF",
              borderRadius: "5px",
              padding: "5px",
              color: "#312B2B",
            }}
          >
            Total: £{total}
          </p>
          <img src={AddIcon} alt="" onClick={() => setShowModal(true)} />
        </div>
      </div>
      <div className="assetCard-options">
        {types.length > 0 ? (
          types.map((t, i) => (
            <div className="assetCard-option">
              <h3>{t.categoryName}</h3>
              <div className="assetCard-option-inner">
                <div className="assetCard-option-inner-options">
                  {t.fields.map((f) => (
                    <div
                      style={{
                        marginRight: "20px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#8596A5",
                          fontWeight: "500",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {f.fieldName}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#312B2B",
                          fontWeight: "500",
                        }}
                      >
                        £{f.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <span
                    style={{
                      color: "#8596A5",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Actions
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <img
                      style={{ marginRight: "5px", cursor: "pointer" }}
                      src={MessageIcon}
                      alt="edit"
                      onClick={() => setShowModal(true)}
                    />
                    <img
                      style={{ marginRight: "5px", cursor: "pointer" }}
                      src={EditIcon}
                      alt="edit"
                      onClick={() => setShowModal(true)}
                    />
                    <img
                      style={{ cursor: "pointer" }}
                      src={DeleteIcon}
                      alt="edit"
                      onClick={() => deleteType(t)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "#232358",
                fontWeight: "700",
                fontSize: "16px",
                marginTop: "90px",
                marginRight: "20px",
              }}
            >
              Add your first Liability
            </p>
            <img src={ArrowPointer} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default LiabilitiesCard;
