public with sharing class ProductController {  
    @AuraEnabled
    public static List<Product2> getProduct(){
        try {
            return [SELECT Product_codentify__c, Product_code__c, Product_status__c, SC__c from Product2 WHERE Product_code__c != ''];

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Product2> searchCodentify(String codentify){
        try {
            return [SELECT MaterialDescription__c, Version__c, MaterialGroupDescription__c, SubjectCode__c, DiagnosticDescription__c, QureChannel__c, Dispose__c, ProductionDate__c from Product2 WHERE Product_codentify__c = :codentify]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}