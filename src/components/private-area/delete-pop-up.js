import React from "react";

class DeletePopUp extends React.Component {

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'scroll';
    }

    render() {
        const { openDeletePopUp, deletePlaceCart } = this.props;

        return (
            <div className='apply-delete_pop-up'>
                <h2>Удалить место</h2>
                <p>Вы уверены, что хотите удалить данное место? Место будет удалено, без возможности восстановления.</p>
                <div>
                    <button onClick={openDeletePopUp}>Нет, отменить</button>
                    <button onClick={deletePlaceCart}>Да, удалить</button>
                </div>
            </div>
        )
    }

}

export default DeletePopUp;