import { useState,cloneElement } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const CustomDialog = (props) => {
    const [open,setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const close = () => {
        setOpen(false)
    };

    const text = props.isedit ? 'Edit' : 'Add';
    const btnStyle = props.isedit ? 'outlined': 'contained';
    const elem = props.isedit ? cloneElement(props.children,{isedit: props.isedit ,data: props.data,closeFunc: close,refresh:props.refresh,page:props.page}) : cloneElement(props.children,{closeFunc:close,page:props.page});
    const isPromotion = props.page === "promotion" ? true:false;

    return (
        <div>
            <Button variant={btnStyle} onClick={handleClick}>{text}</Button>
            <Dialog sx={{minWidth:350}} open={open} onClose={close} fullScreen={isPromotion}>
                <DialogActions>
                    <Button size="small" onClick={close} color="error">X</Button>
                </DialogActions>
                <DialogContent sx={{mt:-4}}>
                    {elem}
                </DialogContent>
            </Dialog>
        </div>
    );

};

export default CustomDialog;