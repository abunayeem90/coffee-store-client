import React from "react";
import Swal from 'sweetalert2'
import { Link, useLoaderData } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo};

        console.log(updatedCoffee );

        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success',
                    text: 'Coffee Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    
    }

    return (
        <div className="mx-32 mt-10">
        <h1 className="font-black text-2xl  gap-1">
            <Link to={'/'} className="flex" type="button">
            <FaLongArrowAltLeft className="my-auto" /> 
            <span className="my-auto">Back to Home</span>
            </Link>
        </h1>
        <div className=" rounded-xl bg-[#F4F3F0]">
         <div className=" m-10 py-10 ">
            <div className=" ">
                <h1 className="flex justify-center items-center font-bold text-3xl mb-4">Update Coffee: {name}</h1>
                <p className="flex justify-center items-center mx-20 mb-6">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

                <form onSubmit={handleUpdateCoffee}>
                    <div className="grid sm:grid-rows-1 ">
                        <div className="flex justify-between   gap-6">
                        <div className="w-full ">
                            <h1 className="mb-2">Name</h1>
                            <label>
                                <input type="text" 
                                className="w-full input input-bordered join-item" 
                                name="name" 
                                defaultValue={name}
                                placeholder="Enter coffee name"
                                id="" />
                            </label>
                        </div>
                        <div className="w-full">
                            <h1 className="mb-2">Quantity</h1>
                            <label>
                                <input type="text" 
                                className="w-full input input-bordered join-item" 
                                name="quantity" 
                                defaultValue={quantity}
                                placeholder="Enter coffee chef"
                                id="" />
                            </label>
                        </div>
                        </div>
                        <div className="flex justify-between mt-4  gap-6">
                        <div className="w-full">
                            <h1 className="mb-2">Supplier</h1>
                            <label>
                                <input type="text" 
                                className="w-full input input-bordered join-item" 
                                name="supplier" 
                                defaultValue={supplier}
                                placeholder="Enter coffee supplier"
                                id="" />
                            </label>
                        </div>
                        <div className="w-full">
                            <h1 className="mb-2">Taste</h1>
                            <label>
                                <input type="text" 
                                className="w-full input input-bordered join-item" 
                                name="taste" 
                                defaultValue={taste}
                                placeholder="Enter coffee taste"
                                id="" />
                            </label>
                        </div>
                        </div>
                        <div className="flex justify-between mt-4  gap-6">
                        <div className="w-full">
                            <h1 className="mb-2">Category</h1>
                            <label>
                                <input type="text" 
                                className="w-full input input-bordered join-item" 
                                name="category" 
                                defaultValue={category}
                                placeholder="Enter coffee category"
                                id="" />
                            </label>
                        </div>
                        <div className="w-full">
                            <h1 className="mb-2">Details</h1>
                            <label>
                                <input type="text" 
                                className="w-full input input-bordered join-item" 
                                name="details" 
                                defaultValue={details}
                                placeholder="Enter coffee details"
                                id="" />
                            </label>
                        </div>
                        </div>
                        <div className="mt-4 w-full">
                            <h1 className="mb-2">Photo</h1>
                            <label>
                                <input type="text" 
                                className="w-full input input-bordered join-item" 
                                name="photo" 
                                defaultValue={photo}
                                placeholder="Enter photo URL"
                                id="" />
                            </label>
                        </div>
                        <div className="mt-4">
                            <input type="submit" value="Update Coffee" className="btn w-full bg-[#D2B48C]" />
                        </div>



                    </div>
                </form>
            
        </div>
       </div>
       </div>
    );
};

export default UpdateCoffee;