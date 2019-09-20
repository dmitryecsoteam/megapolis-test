import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


class EditForm extends React.Component {

    state = {
        title: '',
        prevTitle: '',
        error: false,
        button: <button className='button button--big button--blue'>Вернуться в список</button>
    }

    /**
     * 1. Проверяем, что список заданий был загружен из апи
     * 2. Находим в этом списке запись c id из адресной строки и устанавливаем состояние title из этой записи
     * 3. Если такой записи нет, то перенаправляем на страницу /items
     */
    componentDidMount() {
        if (this.props.items[0] !== 'INIT') {
            const item = this.props.items.filter(item => item.id === parseInt(this.props.match.params.id));
            if (item.length > 0) {
                this.setState({
                    title: item[0].title,
                    prevTitle: item[0].title
                });
            } else {
                this.props.history.push('/items');
            }
        }
    }

    /**
     * 1. Если пользователь перешел по прямой ссылке /items/:id, то список заданий не успеет подгрузится и в componentDidMount в массиве items будет 'INIT'
     * 2. Когда список загрузится, то изменится props.items и будет вызван componentDidUpdate
     * 3. Проверяем, что предыдущий props.items был равен 'INIT' и он не равен текущему props.items
     * 4. Далее аналогично componentDidMount (см. выше)
     */
    componentDidUpdate(prevProps) {
        if (prevProps.items[0] === 'INIT' && this.props.items[0] !== 'INIT') {
            const item = this.props.items.filter(item => item.id === parseInt(this.props.match.params.id));
            if (item.length > 0) {
                this.setState({
                    title: item[0].title,
                    prevTitle: item[0].title
                });
            } else {
                this.props.history.push('/items');
            }
        }
    }

    /**
     * 1. Если значение в инпуте равно равно значению в базе, то рендерим кнопку "Вернуться в список"
     * 2. Если значения разные, то рендерим кнопку "Сохранить"
     */
    onTitleChange = ({ target }) => {
        const title = target.value;
        let button;
        if (title === this.state.prevTitle) {
            button = <button className='button button--big button--blue'>Вернуться в список</button>;
        } else {
            button = <button className='button button--small button--blue'>Сохранить</button>;
        }
        this.setState({
            title,
            button
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.state.title === '') {
            this.setState({
                error: true
            });
        } else {
            if (this.state.title !== this.state.prevTitle) {
                this.props.editItem(this.state.title, parseInt(this.props.match.params.id));
            }
            this.props.history.push('/items');
        }
    }

    render() {

        // Отрендерить форму, только если данные загружены из апи
        return (
            <Fragment>
                {this.props.items[0] !== 'INIT' && (
                    <div className="edit-form__container">
                    <form
                        className='add-popup__form-container'
                        onSubmit={this.onFormSubmit}
                    >
                        <label className='add-popup__label'>Краткое описание</label>
                        <input
                            className='add-popup__input'
                            type="text"
                            value={this.state.title}
                            onChange={this.onTitleChange}
                        />
                        <div className='add-popup__error'>{this.state.error && "Заголовок не может быть пустым"}</div>
                        {this.state.button}
                    </form>
                </div>
                )}
            </Fragment>
            

        );
    }
}

EditForm.propTypes = {
    items: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired
}

export default EditForm;