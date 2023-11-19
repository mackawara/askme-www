
import { Avatar, Grid, Typography } from '@mui/material'
import { Message } from '../../types'
import { colors } from '../../constants/colors'

const MessageComponent: React.FC<Message> = ({ content, type }) => {
    return (<Grid container sx={{ width: '100%', alignItems: 'center', margin: '8px 0 8px', backgroundColor: type === 'user' ? colors.lightBackground : colors.shadow, borderRadius: '8px', padding: '8px' }}>
        <Grid item xs={1} sx={{ verticalAlign: 'middle' }}>
            <Avatar sx={{ bgcolor: colors.specialBackground, color: colors.border }}>{type == 'user' ? 'A' : 'S'}</Avatar>
        </Grid>
        <Grid item xs={11} >
            <Typography color={colors.color} textAlign={'left'} >{content}</Typography>
        </Grid>
    </Grid >

    )
}
export default MessageComponent