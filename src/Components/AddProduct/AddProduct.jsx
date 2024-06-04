import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from "../Assets/upload_area.jpg"

const AddProduct = () => {

    const [image,setImage] = useState(false);

    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"nature",
        price:""
    })
    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('https://picturanex-backend.onrender.com/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})
        if(responseData.success)
            {
                product.image = responseData.image_url;
                console.log(product);
                await fetch('https://picturanex-backend.onrender.com/addproduct',{
                    method:'POST',
                    headers:{
                        Accept:'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify(product),
                }).then((resp)=>resp.json()).then((data)=>{
                    data.success?alert("Image Added"):alert("Failed")
                })
            }
    }
  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Image Title</p>
            <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.price} onChange={changeHandler} type='text' name='price' placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-itemfield"> 
                <p>Image Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
                    <option value="nature">Nature</option>
                    <option value="flower">Flower</option>
                    <option value="animal">Animal</option>
                    <option value="sea">Sea</option>
                    <option value="children">Children</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumnail-img" alt="" />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={()=>{Add_product()}} className='addproduct-btn'>Upload</button>
    </div>
  )
}
export default AddProduct