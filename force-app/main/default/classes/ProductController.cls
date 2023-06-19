public with sharing class ProductController {  
    @AuraEnabled
    public static List<Product2> getProduct(){
        try {
            return [SELECT Product_codentify__c, Product_code__c, Product_status__c, SC__c from Product2 WHERE Product_code__c != ''];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}