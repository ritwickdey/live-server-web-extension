/**
 * JavaFile2
 */
public class JavaFile2 {

    int roll;
    String name;
    
    public int getRoll() {
        return roll;
    }

    public void setRoll(int roll) {
        this.roll = roll;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public JavaFile2(){
        roll=1807074;
        name="Shafin";
    }

    public JavaFile2(int roll, String name) {
        this.roll = roll;
        this.name = name;
    }

    
}