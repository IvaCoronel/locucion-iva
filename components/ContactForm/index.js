import {useState} from 'react'
import {useForm} from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import { makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const theme = createMuiTheme({
    palette: {
        primary: {
          
          main: '#e33371',
        },
    }
  });

export default function ContactForm() {

    const {register, handleSubmit}= useForm()
    const onSubmit =(data) => {
        console.log(data)
        //acá tengo que mandar el mail
    }
    const classes= useStyles();

    return(
          <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
            <div>
                <ThemeProvider theme={theme}>
                    <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        variant="outlined"
                        name="mail"
                        inputRef={register}
                        color="primary"
                        />
                    </div>
                    <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Asunto"
                        variant="outlined"
                        name="asunto"
                        inputRef={register}
                        color="primary"
                        />
                    </div>  
                    <div>
                        <TextField
                        required
                        id="outlined-required"
                        label="Consulta"
                        variant="outlined"
                        name="redactar"
                        inputRef={register}
                        color="primary"
                        />
                    </div>  
                    <div>
                        <Button
                        type="enviar"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<EmailIcon>send</EmailIcon>}
                        >
                        Enviar Consulta
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </form>
    )
}