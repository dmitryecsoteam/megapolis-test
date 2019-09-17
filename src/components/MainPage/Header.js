import React from 'react';
import Popup from 'reactjs-popup';

class Header extends React.Component {
    state = {
        title: ''
    }

    onTitleChange = ({ target }) => {
        this.setState({
            title: target.value
        });
    }

    onFormSubmit = (e, close) => {
        e.preventDefault();

        this.props.addItem(this.state.title, Math.floor(Math.random() * 1000));

        this.setState({
            title: ''
        });

        close();
    }

    render() {
        return (
            <div className='header__container'>
                <h1 className='header__title'>Список задач</h1>
                <Popup
                    trigger={<button className='header__add-button'>Добавить</button>}
                    modal
                    closeOnDocumentClick
                >
                    {close => (
                        <div className='add-popup__container'>
                            <form onSubmit={(e) => this.onFormSubmit(e, close)}>
                                <input
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.onTitleChange}
                                />
                                <button>Создать</button>
                            </form>
                        </div>
                    )}
                </Popup>
            </div>
        )
    }

}

export default Header;