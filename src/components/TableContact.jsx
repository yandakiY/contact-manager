/* eslint-disable array-callback-return */
import React from 'react'
import RowContact from './RowContact'
import ContactNotFound from './ContactNotFound';

const TableContact = ({ contacts, favContact, textFilter }) => {

    // filtrer direct les datas of contacts
    let contactsFilter = [];

    contacts.forEach(e => {
        if (e.name.toLowerCase().indexOf(textFilter.toLowerCase()) === -1) {
            return;
        }
        contactsFilter.push(e)
    });


    return (
        <div>
            {textFilter && 'Recherche : ' + textFilter}
            {contactsFilter.length === 0 ? <ContactNotFound /> : 
                contactsFilter.map((e , i) =>
                    <RowContact textFilter={textFilter} contact={e} key={i} />
            )}
        </div>
    )
}

export default TableContact