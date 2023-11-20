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

    const { register, reset, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<Message> = (data) => {
        onDataUpdate(data)
        reset()
    }

    return (
        <Container sx={{ width: '100%', maxWidth: 'none', margin: '2em 0 0', padding: '0', position: 'absolute', bottom: '5%' }}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container sx={{ width: '100%', display: 'flex', zIndex: 100, height: 'content', alignItems: 'center', margin: 0, padding: 0 }}>
                    <Grid item xs={11}>
                        <TextField id="outlined-multiline-flexible" fullWidth={true} sx={{ backgroundColor: colors.lightBackground, margin: 0, borderRadius: '2vh', padding: 0 }} label="Type your message here"  {...register("content")} />
                    </Grid>
                    <Grid item xs={1} sx={{ height: 'auto', margin: 0, padding: 0, alignItems: 'flex-start' }}>
                        <Button disabled={isLoading} type='submit' sx={{ color: colors.color, padding: 0, margin: 0, alignSelf: 'flex-start' }} endIcon={<SendIcon />} ></Button>
                    </Grid>
                </Grid>

            </form>
        </ Container >
    )
}
export default UserInputBox


