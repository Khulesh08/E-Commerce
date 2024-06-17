"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "@/action/productActions";
import { Product } from "../../interface/interface";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase/firebaseConfig";
import firebase from "firebase/compat/app";
import { RootStore } from "@/store/store";
import { useEffect } from "react";
import "./addProduct.css";
import { getLocalStorage, setLocalStorage } from "@/service/service";

const AddProduct: React.FC = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState<Product>({
    id: 0,
    category: "laptop",
    model: "",
    brand: "",
    quantity: 0,
    description: "",
    price: 0,
    image: "",
    stock: 0,
    avlQty: 0,
  });
  useEffect(() => {
    getLocalStorage("products");
    setLocalStorage("products", products);
  }, []);

  const firestore = firebase.firestore();
  const productsCollectionRef = firestore.collection("products");

  useEffect(() => {
    const unsubscribe = productsCollectionRef.onSnapshot((snapshot) => {
      const updatedProducts: Product[] = [];
      snapshot.forEach((doc) => {
        updatedProducts.push({
          ...doc.data(),
          id: doc.id,
        } as unknown as Product);
      });
      dispatch(updateProducts(updatedProducts));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, productsCollectionRef]);

  const updateProducts = (updatedProducts: Product[]) => ({
    type: "UPDATE_PRODUCTS",
    payload: updatedProducts,
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [errorMessage, setErrorMessage] = useState({
    stock: "",
    price: "",
  });
  const [emptyMessage, setEmptyMessage] = useState<string>();
  const [idErrorMessage, setIdErrorMessage] = useState<string>();
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!imageFile) {
      return;
    }
    const storageRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const imageUrl = await getDownloadURL(storageRef);
    setProductData({ ...productData, image: imageUrl });
    await saveImageUrlToFirestore(imageUrl);
    return imageUrl;
  };

  const saveImageUrlToFirestore = async (imageUrl: string) => {
    const firestore = firebase.firestore();
    try {
      await firestore.collection("images").add({
        imageUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log(imageUrl);
      console.log("Image URL saved to Firestore successfully.");
    } catch (error) {
      console.error("Error saving image URL to Firestore:", error);
    }
  };

  const products: Product[] = useSelector(
    (state: RootStore) => state.products.products
  );

  /**
   * It handles the changes in input fields.
   * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - The event object containing the target input element.
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if ((name === "stock" || name === "price") && isNaN(Number(value))) {
      showError(
        name,
        `${name.charAt(0).toUpperCase() + name.slice(1)} must be a valid number`
      );
      return;
    }

    setProductData({ ...productData, [name]: value });
    setErrorMessage((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  /**
   * Handles the form submission.
   * Prevents the default form submission behavior, validates form fields, and dispatches actions accordingly.
   * @param {FormEvent<HTMLFormElement>} e - The form event.
   * @returns {void}
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage({
      stock: "",
      price: "",
    });
    setEmptyMessage("");
    setIdErrorMessage("");

    if (
      products.some(
        (product) =>
          product.id === productData.id && product.id !== selectedProduct?.id
      )
    ) {
      setIdErrorMessage("Product id already exists");
      return;
    }

    let imageUrl: string | undefined = productData.image;

    if (imageFile) {
      imageUrl = await uploadImage();
    }

    if (selectedProduct) {
      if (
        !productData.category ||
        !productData.model ||
        !productData.brand ||
        !productData.stock ||
        !productData.description ||
        !productData.price ||
        !productData.image
      ) {
        setEmptyMessage("It's manadatory to fill all the details!");
        return;
      } else {
        const updatedProductData = imageFile
          ? { ...productData, image: imageUrl! }
          : productData;
        dispatch(updateProduct(updatedProductData));
      }
    } else {
      if (
        !productData.category ||
        !productData.model ||
        !productData.brand ||
        !productData.stock ||
        !productData.description ||
        !productData.price ||
        !imageFile
      ) {
        setEmptyMessage("It's manadatory to fill all the details!");
        return;
      } else dispatch(addProduct({ ...productData, image: imageUrl! }));
    }

    setProductData({
      id: 0,
      category: "laptop",
      model: "",
      brand: "",
      quantity: 0,
      description: "",
      price: 0,
      image: "",
      stock: 0,
      avlQty: 0,
    });
    setSelectedProduct(null);

    setImageFile(null);
    console.log(productData);
  };

  /**
   * Updates the error message for a specific field.
   * @param {string} field - The name of the field.
   * @param {string} message - The error message to set.
   */
  const showError = (field: string, message: string) => {
    setErrorMessage((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  /**
   * This method dispatches an action to delete a product with the specified id.
   * @param {number} id - The id of the product to be deleted.
   * @returns {void}
   */
  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  /**
   * Selects the product data and sets the product for editing.
   * @param {Product} product - The product to set and select for editing.
   * @returns {void}
   */
  const handleEdit = (product: Product) => {
    setProductData(product);
    setSelectedProduct(product);
  };

  return (
    // <div className="bg-color">
    <div className="bg-color">
      <form onSubmit={handleSubmit}>
        <div
          style={{ marginLeft: "800px", fontSize: "20px", marginTop: "50px" }}
          className="product-card"
        >
         <center> <h2>Add New Product </h2></center>
<br/><br/>
          <p>
            <label>Id:</label> &emsp;&emsp;&emsp;&emsp;&emsp; 
            <input
              type="text"
              name="id"
              value={productData.id}
              onChange={handleChange}
            />
            {idErrorMessage && (
              <div style={{ color: "red" }}>{idErrorMessage}</div>
            )}
          </p>
          <br />
          <p>
            <label>Category:</label>&emsp;&emsp;
            <select
              name="category"
              value={productData.category}
              onChange={handleChange}
            >
              <option value="laptop">Laptop</option>
              <option value="mobile">Mobile</option>

              <option value="television">Television</option>
            </select>
          </p>
          <br />
          <p>
            <label>Model:</label>&emsp;&emsp;&emsp;&ensp;
            <input
              type="text"
              name="model"
              value={productData.model}
              onChange={handleChange}
            />
          </p>
          <br />
          <p>
            <label>Brand:</label>&emsp;&emsp;&emsp;&ensp;
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </p>
          <br />
          <p>
            <label>Stock:</label>&emsp;&emsp;&emsp;&ensp;
            <input
              type="text"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
            />
            <span className="error-message">{errorMessage.stock}</span>
          </p> 
          <br />
          <p>
            <label>Description:</label>&emsp;
            <input
              type="text"
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </p> 
          <br />
          <p>
            <label>Price:</label>&emsp;&emsp;&emsp;&emsp;
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
            <span className="error-message">{errorMessage.price}</span>
          </p> 
          <br />
          <p>
            <label>Image Url:</label>&emsp;&emsp;
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </p> 
          <br />
          <br />
          {emptyMessage && <div style={{ color: "red" }}>{emptyMessage}</div>}
          <br />
          <button type="submit" style={{marginLeft: "150px"}} className="cart-button">Add Product</button>
        </div>
        <br/>
        
      </form>

      <table className="submission-table">
        <thead>
          <tr className="header-font">
            <th>ID</th>
            <th>Category</th>
            <th>Model</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image Url</th>
            <th>Update / Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>{product.model}</td>
              <td>{product.brand}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td className="truncate">{product.image}</td>

              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                &emsp;
                <button onClick={() => handleEdit(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddProduct;
