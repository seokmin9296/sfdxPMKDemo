import { LightningElement, wire, track } from 'lwc';
import getProduct from '@salesforce/apex/ProductController.getProduct';
import searchCodentify from '@salesforce/apex/ProductController.searchCodentify';

const COLS = [  {label: '제품코덴티파이', fieldName: 'Product_codentify__c'},
                {label: '일련번호', fieldName: 'Product_code__c'},
                {label: '상태구분', fieldName: 'Product_status__c'},
                {label: 'SC', fieldName: 'SC__c'}
            ];
export default class Pmkdemo extends LightningElement {
    draftValues = [];
    columns = COLS;

    @wire(getProduct)
    products;

    @track inputCodentify;

    handleCodentifyChange(){
        this.inputCodentify = event.target.value;
    }

    searchCodentify(){
        searchCodentify({ codentify: this.inputCodentify })
        .then(result => {
            let product = result[0];
            this.template.querySelector("[data-id='MdInput']").value = product.MaterialDescription__c;
            this.template.querySelector("[data-id='VersionInput']").value = product.Version__c;
            this.template.querySelector("[data-id='MgdInput']").value = product.MaterialGroupDescription__c;
            this.template.querySelector("[data-id='ScInput']").value = product.SubjectCode__c;
            this.template.querySelector("[data-id='DdInput']").value = product.DiagnosticDescription__c;
            this.template.querySelector("[data-id='QcInput']").value = product.QureChannel__c;
            this.template.querySelector("[data-id='DisposeInput']").checked = product.Dispose__c;
            this.template.querySelector("[data-id='PdInput']").value = product.ProductionDate__c;
        })
        .catch(error => {
            alert('등록되지 않은 코덴티파이 값입니다.');
        });
    }


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