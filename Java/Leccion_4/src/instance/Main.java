package instance;

public class Main {
    /*
     * Testing instanceOf
     * */
    public static void main(String[] args) {
        // Create an Employee object
        Employee employee = new Employee("John Doe", 50000);
        // System.out.println(employee.getDetails());
        type(employee);

        // Create a new Manager object
        Manager manager = new Manager("Jane Smith", 70000, "Sales");
        // System.out.println(manager.getDetails());
        type(manager);

        Employee employee2 = new Manager("Carl Doe", 50000, "Marketing");
        type(employee2);
    }

    public static void type(Employee employee) {
        if (employee == null) {
            System.out.println("Cannot determine type, employee is null.");
        }
        if (employee instanceof Manager) {
            System.out.println("This is a manager.");
            System.out.println("Manager details: " + employee.getDetails());
        }
        if (employee instanceof Employee) {
            System.out.println("This is an employee.");
            System.out.println("Employee details: " + employee.getDetails());
        }
        if (employee instanceof Object) {
            System.out.println("This is an object.");
            System.out.println("Object details: " + employee.getDetails());
        }
    }
}
