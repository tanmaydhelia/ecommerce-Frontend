import {Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { toFormData } from "axios";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {auth} = useSelector(store=>store)
  console.log("auth", auth.user)

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        
        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber"),
            // _id: data?.get("._id")
        };

        console.log(address._id)

        const orderData={address,navigate}
        dispatch(createOrder(orderData))
        console.log("address", address);
    }

  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-black cursor-pointer space">
            <div className="space-y-3">
              {/* {console.log(auth.user.address)} */}
            {auth.user?.addresses.map((item)=><AddressCard address={item}/>)}
            </div>
            

            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 83 253)" }}
              size="large"
              variant="contained"
              onClick={handleSubmit}
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>

            <Box className='border rounded-s-md shadow-md p-5'>

                <form onSubmit={handleSubmit}> 
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>

                            <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                            

                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="name last-name"
                            />
                            

                        </Grid>
                        <Grid item xs={12}>

                            <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            autoComplete="address street-address"
                            multiline
                            rows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="address city"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <TextField
                            required
                            id="state"
                            name="state"
                            label="State / Province / Region"
                            fullWidth
                            autoComplete="address state"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal Code"
                            fullWidth
                            autoComplete="postal-code pin-code"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <TextField
                            required
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            fullWidth
                            autoComplete="number phone-number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Button
                        sx={{py:1.5, mt: 2, bgcolor: "RGB(145 83 253)" }}
                        size="large"
                        variant="contained"
                        type="submit"
                        >
                        Deliver Here
                        </Button>
                        </Grid>
                    </Grid>
                </form>

            </Box>

        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
