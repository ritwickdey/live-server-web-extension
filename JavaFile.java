public class JavaFile {
        
    int variable;
    String works;
    
    public JavaFile(){
        variable=23;
        works="Nothing";
    }

    public JavaFile(int v, String s) {
        variable=v;
        works=s;
    }

    public int getVariable() {
        return variable;
    }

    public void setVariable(int variable) {
        this.variable = variable;
    }

    public String getWorks() {
        return works;
    }

    public void setWorks(String works) {
        this.works = works;
    }
    
}