import React from 'react';
import PropTypes from 'prop-types';
import ReactPopup from 'reactjs-popup';


class Popup extends React.Component {

    state = {
        title: '',
        error: false
    }

    onTitleChange = ({ target }) => {
        this.setState({
            title: target.value
        });
    }

    onFormSubmit = (e, close) => {
        e.preventDefault();

        if (this.state.title === '') this.setState({
            error: true
        });
        else {
            this.props.addItem(this.state.title);
            close();
        }
    }

    onClose = () => {

        // Clear state each time popup is closed
        this.setState({
            title: '',
            error: false
        });
    }

    render() {

        const overlayStyle = {
            background: 'rgba(242,242,242,0.5)'
        };

        const contentStyle = {
            width: '46.4rem',
            height: '18rem',
            padding: '2.6rem 3.2rem',
            borderRadius: '6px'
        }

        return (
            <ReactPopup
                trigger={<button className='button button--small button--green'>Добавить</button>}
                modal
                closeOnDocumentClick
                overlayStyle={overlayStyle}
                contentStyle={contentStyle}
                onClose={this.onClose}
            >
                {close => (
                    <div className='add-popup__container'>

                        <button
                            className='add-popup__close-btn'
                            onClick={close}
                        >&#10005;</button>

                        <form
                            className='add-popup__form-container'
                            onSubmit={(e) => this.onFormSubmit(e, close)}
                        >

                            <label className='add-popup__label'>Краткое описание</label>
                            <input
                                className='add-popup__input'
                                type="text"
                                value={this.state.title}
                                onChange={this.onTitleChange}
                            />
                            <div className='add-popup__error'>{this.state.error && "Заголовок не может быть пустым"}</div>
                            <button className='button button--small button--green add-popup__button'>Создать</button>

                        </form>


                    </div>
                )
                }
            </ReactPopup>
        );
    }
}

Popup.propTypes = {
    addItem: PropTypes.func.isRequired
}

export default Popup;