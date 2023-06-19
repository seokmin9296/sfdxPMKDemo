import { LightningElement, wire } from 'lwc';
import getProduct from '@salesforce/apex/ProductController.getProduct';

const COLS = [  {label: '제품코덴티파이', fieldName: 'Product_codentify__c'},
                {label: '일련번호', fieldName: 'Product_code__c'},
                {label: '상태구분', fieldName: 'Product_status__c'},
                {label: 'SC', fieldName: 'SC__c'}
            ];
export default class Pmkdemo extends LightningElement {
    draftValues = [];

    @wire(getProduct)
    products;

    columns = COLS;

    // async handleSave(event){
    //     const updateFieids = event.detail.draftValues;

    //     this.draftValues = [];

    //     try{
    //         await updateContacts({contactsForUpdate: updateFieids});
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Success',
    //                 message: 'Contacts updated',
    //                 variant: 'success'
    //             })
    //         );
    //         await refreshApex(this.products);
    //     }catch(error){
    //         this.dispatchEvent(
    //             new ShowToastEvent({
    //                 title: 'Error while updating or refreshing records',
    //                 message: error.body.message,
    //                 variant: 'error'
    //             })
    //         );
    //     }
    // }
}