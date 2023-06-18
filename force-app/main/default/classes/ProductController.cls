public with sharing class ProductController {  
    public List<Product2> getProduct(){
        return [SELECT Product_codentify__c, Product_code__c, Product_status__c, SC__c from Product2];
    }
}