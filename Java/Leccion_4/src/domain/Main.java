package domain;

public class Main {
    /*
    * Testing polymorphism
    * */
    public static void main(String[] args) {
        // Create an Employee object
        Employee employee = new Employee("John Doe", 50000);
        // System.out.println(employee.getDetails());
        printEmployee(employee);

        // Create a new Manager object
        Manager manager = new Manager("Jane Smith", 70000, "Sales");
        // System.out.println(manager.getDetails());
        printEmployee(manager);
    }

    // This method is polymorphic
    public static void printEmployee(Employee employee) {
        System.out.println(employee.getDetails());
    }
}
