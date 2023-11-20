import React from 'react'
import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import UserInputBox from '../components/userInputBox'
import MessageComponent from '../components/message'
import axios from 'axios'
import { colors } from '../../constants/colors'
import { css } from '@emotion/react'

import { FormData, Message } from '../../types'
import MessageHistory from '../components/messagesList'


const LandingPage = () => {
    const [message, setMessage] = useState<Message>()
    const [isLoading, setLoading] = useState<boolean>(false)
    const [messageHistory, setMessageHistory] = useState<Message[]>([])
    const getAiResponse = async (message: Message): Promise<Message> => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // This is a simple example; adjust it based on your security requirements
            }

            const response = await axios({
                method: 'POST',
                url: 'http://localhost:4001/query',
                data: message,
                headers: headers
            })
            //return { content: response.data.message, type: 'system' }
            setLoading(false)
            setMessageHistory([...messageHistory, { content: response.data.message, type: 'system' }])

            return { content: 'test', type: 'system' }
        } catch (error) {
            setLoading(false)
            return { type: 'system', content: "an erro occured" }
        }
    }
    const handleMessages = async (input: Message) => {
        console.log(input)
        setLoading(true)
        setMessage(input)
        setMessageHistory([...messageHistory, input])
    }
    console.log("this is message line6" + message?.content)
    useEffect(() => {
        if (messageHistory.length < 1) {
            console.log('message not found')
        } else if (message) {
            //setMessageHistory([...messageHistory, message])
            const getAI = async () => {
                console.log("called")
                const response = await getAiResponse(message!);//should update History
                console.log(response);
                return response
            }
            getAI()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message])

    return (<Container sx={{ backgroundColor: colors.background, height: '100vh', overflow: 'hidden', display: 'flex', flexBasis: '80%', flexDirection: 'column', padding: '0 0 0 0' }} >
        <MessageHistory messageList={messageHistory} />
        <UserInputBox onDataUpdate={handleMessages} isLoading={isLoading} />
    </Container>)
}
export default LandingPage