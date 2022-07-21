import React, { useRef } from "react";
import "./modal.css";
import CloseButton from "../../assets/images/close-button.svg";
import { Input, message, Modal } from "antd";
import AddButton from "../../assets/images/add-with-text.svg";
import Button from "../button/Button";

function MyModal({
  visible,
  setVisible,
  modalFields,
  title,
  subtitle,
  handleCompleted,
  simple,
  // new category controls
  onAddNewCategory,
  addNewCategoryText,
  // new sub category controls
  onAddNewSubCategory,
  onChangeSubcategoryValueField,
}) {
  const onSimpleModalComplete = () => {
    const values = modalFields.map((f) => f.ref.current.input.value);
    if (values.filter((f) => f.length <= 0).length > 0) {
      message.error("All fields are required.");
    } else {
      handleCompleted(modalFields);
    }
  };

  const onAdvanceModalComplete = () => {};
  return (
    <Modal
      visible={visible}
      footer={false}
      onCancel={() => setVisible(false)}
      closable={false}
    >
      {simple ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div>
              <h2
                style={{
                  color: "#232358",
                  fontWeight: "700",
                  fontSize: "24px",
                }}
              >
                {title}
              </h2>
              <p>{subtitle}</p>
            </div>
            <img
              src={CloseButton}
              alt="close-btn"
              style={{ cursor: "pointer" }}
              onClick={() => setVisible(false)}
            />
          </div>
          {modalFields.map((field) => (
            <div style={{ marginBottom: "20px" }}>
              <span>{field.label}</span>
              <Input
                style={{ marginTop: "8px" }}
                ref={field.ref}
                name={field.fieldName}
                type={field.type}
              />
            </div>
          ))}

          <Button
            text="CREATE"
            onClick={onSimpleModalComplete}
            style={{
              background: "#FD9125",
              borderRadius: "50px",
              color: "#fff",
              width: "100%",
              fontWeight: "600",
            }}
          />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div>
              <h2
                style={{
                  color: "#232358",
                  fontWeight: "700",
                  fontSize: "24px",
                }}
              >
                {title}
              </h2>
            </div>
            <img
              src={CloseButton}
              alt="close-btn"
              style={{ cursor: "pointer" }}
              onClick={() => setVisible(false)}
            />
          </div>
          {modalFields.map((type, i) => (
            <div>
              <h3
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #EAE6E6",
                  paddingBottom: "5px",
                  fontSize: "16px",
                  color: "#232358",
                  fontWeight: "700",
                }}
              >
                {type.categoryName}
                <img
                  src={AddButton}
                  alt="add"
                  onClick={() => onAddNewSubCategory(type.id)}
                  style={{
                    float: "right",
                    marginTop: "-15px",
                    cursor: "pointer",
                  }}
                />
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                  gridGap: "10px",
                }}
              >
                {type.fields.map((field) => (
                  <div style={{ marginBottom: "20px", width: "100px" }}>
                    <span style={{ fontSize: "12px", color: "#232358" }}>
                      {field.fieldName}
                    </span>
                    <Input
                      style={{ marginTop: "8px" }}
                      value={field.value}
                      onChange={(e) =>
                        onChangeSubcategoryValueField(
                          type.id,
                          field.id,
                          e.target.value
                        )
                      }
                      ref={field.ref}
                      name={field.fieldName}
                      type={field.type}
                      placeholder="£0"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <h2
            style={{
              color: "#FD9125",
              fontSize: "16px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={onAddNewCategory}
          >
            {addNewCategoryText}
          </h2>
          <Button
            text="Save"
            onClick={onAdvanceModalComplete}
            style={{
              background: "#FD9125",
              borderRadius: "50px",
              color: "#fff",
              width: "100%",
              fontWeight: "600",
            }}
          />
        </div>
      )}
    </Modal>
  );
}

export default MyModal;
