import React, { useState, useEffect, useRef } from "react";
import "./assetcard.css";
import AddIcon from "../../../assets/images/add-icon.svg";
import MessageIcon from "../../../assets/images/message-icon.svg";
import EditIcon from "../../../assets/images/p-edit-icon.svg";
import DeleteIcon from "../../../assets/images/delete-icon.svg";
import SmallPlayIcon from "../../../assets/images/small-play-icon.svg";
import MyModal from "../../modal/Modal";

function LiabilitiesCard() {
  const [showModal, setShowModal] = useState(false);
  const [addNewCategoryModal, setAddNewCategoryModal] = useState(false);
  const [addNewSubCategoryModal, setAddNewSubCategoryModal] = useState(false);
  const [total, setTotal] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [types, setTypes] = useState([
    {
      categoryName: "Example Category",
      fields: [
        {
          fieldName: "Car",
          value: 6500,
        },
        {
          fieldName: "Car2",
          value: 6500,
        },
      ],
    },
    {
      categoryName: "Example Category2",
      fields: [
        {
          fieldName: "Car3",
          value: 6500,
        },
        {
          fieldName: "Car4s",
          value: 6500,
        },
      ],
    },
  ]);
  const [modalFields, setModalFields] = useState([]);

  useEffect(() => {
    const total = types
      .map((t) => t.fields.map((t) => t.value))
      .flat(1)
      .reduce((prev, current) => prev + current);
    setTotal(total);
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
  return (
    <div className="assetCard-container">
      <MyModal
        visible={showModal}
        setVisible={setShowModal}
        simple={false}
        title="Liabilities"
        modalFields={modalFields}
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
            Video Trailer
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
        {types.map((t, i) => (
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
                  />
                  <img
                    style={{ marginRight: "5px", cursor: "pointer" }}
                    src={EditIcon}
                    alt="edit"
                  />
                  <img
                    style={{ cursor: "pointer" }}
                    src={DeleteIcon}
                    alt="edit"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiabilitiesCard;
