import React from 'react';
import List from '../ListComplete';

const Modal = ({open, close, list, children}) => {

    return (
        <>
            {open &&
            <div style={styles.back}>
                <div style={styles.modal}>
                    {console.log(list)}
                    {children}
                    <button style={styles.closeBtn} onClick={() => {close(false)}}>X</button>
                </div>
            </div>}
        </>
    );
}
export default Modal;

const styles = {
    back: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: '800px',
        minHeight: '100px',
        position: 'relative',
        background: '#fff',
        borderRadius: 5,
        padding: 15,
        boxShadow: '2px 2px 10px rgba(0,0,0,3)',
        zIndex: 10,
        minWidth: 320
    },
    closeBtn: {
        position: 'absolute',
        top: 5,
        right: 5
    }
}