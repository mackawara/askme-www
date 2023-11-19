import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

import { useForm, SubmitHandler } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { Button, Grid, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormData, Message } from '../../types';
import { css } from '@emotion/react'
import { red } from '@mui/material/colors';
import { colors } from '../../constants/colors';



const UserInputBox = ({ onDataUpdate, isLoading }) => {

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<Message> = (data) => {
        onDataUpdate(data)
    }

    return (
        <Container sx={{ width: '100%', alignSelf: 'flex-end', maxWidth: 'none', margin: '2em 0 0', padding: '0', border: '1px solid red', position: 'absolute', bottom: '9px' }}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container sx={{ width: '100%', height: 'auto', alignItems: 'center', margin: 0, padding: 0 }}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic" fullWidth={true} sx={{ backgroundColor: colors.lightBackground, margin: 0, padding: 0 }} label="Type your message here" variant="outlined"  {...register("content")} />
                    </Grid>
                    <Grid item xs={1} sx={{ verticalAlign: 'middle', height: 'auto', margin: 0, padding: 0 }}>
                        <Button varaint="outlined" disabled={isLoading} type='submit' sx={{ color: colors.color, padding: 0, margin: 0 }} endIcon={<SendIcon />} ></Button>
                    </Grid>
                </Grid>

            </form>
        </ Container >
    )
}
export default UserInputBox


