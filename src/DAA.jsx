    	1. AREA OF WALL 

import java.util.*;
class Wall{
    private
    double length,height;int num;
    public Wall(double length,double height,int num){
        this.length=length;
        this.height=height;
        this.num=num;
    }
    public void calculateArea(){
        System.out.println("Area of Wall "+num+": "+(int)(length*height));
    }
}
class Main{
    public static void main(String args[]){
     Scanner sc=new Scanner(System.in);
     double l1=sc.nextDouble();
     double h1=sc.nextDouble();
     double l2=sc.nextDouble();
     double h2=sc.nextDouble();
    Wall a=new Wall(l1,h1,1);
    a.calculateArea();
    Wall b=new Wall(l2,h2,2);
    b.calculateArea();
}
}

2) PROFESSOR

import java.util.Scanner;
class Professor {
    int id;
    String name;
    int salary;
    Professor(int id,String name,int salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    public void display() {
        System.out.println(id +" "+name +" "+salary);
    }
}
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt();
        Professor[] p=new Professor[n];
        for (int i=0;i<n;i++) {
            int id=sc.nextInt();
            String name=sc.next();
            int salary=sc.nextInt();
            p[i] =new Professor(id,name,salary);
        }
        for (int i=0;i<n;i++) {
            if (p[i].salary>=20000) {
                p[i].display();
            }
        }
    }
}
3) ICE CREAM

import java.util.Scanner;
import java.math.*;
import java.text.DecimalFormat;
class Icecream
{
    public double qty, qty_rd, pi=3.14;
    DecimalFormat d=new DecimalFormat("0.00");
    public void Quantity(int r)
    {
        qty=1.33*pi*r*r*r;
        qty_rd=Math.round(qty*100.0)/100.0;
        System.out.println(d.format(qty_rd));
    }
    public void Quantity(int r, int h)
    {
        qty=0.33*pi*r*r*h;
        qty_rd=Math.round(qty*100.0)/100.0;
        System.out.println(d.format(qty_rd));
    }
}
class main
{
    public static void main(String[] args)
    {
        int r,h;
        Icecream ic=new Icecream();
        Scanner ob=new Scanner(System.in);
        r=ob.nextInt();
        if(ob.hasNextInt())
        {
            h=ob.nextInt();
            ic.Quantity(r,h);
        }
        else
        {
            ic.Quantity(r);
        }
    }
}

4)  MANAGER AND ENGINEER


import java.util.Scanner;
class Employee
{
    public double tot;
    public void calculateSalary()
    {
        
    }
    public double calculateSalary(double a, double b)
    {
        tot=a+b;
        return tot;
    }
}
class Manager extends Employee
{
    public double calculateSalary(double c, double d)
    {
        return c+d;
    }
}
class Engineer extends Employee
{
    public double calculateSalary(double e, double f)
    {
        return e+f;
    }
}
class Main
{
    public static void main(String[] args)
    {
        Scanner ob=new Scanner(System.in);
        String ManagerName=ob.nextLine();
        double bs=ob.nextDouble();
        double ex=ob.nextDouble();
        Manager m=new Manager();
        System.out.println("Manager Salary: "+m.calculateSalary(bs,ex));
        ob.nextLine();
        String EngineerName=ob.nextLine();
        double bs2=ob.nextDouble();
        double ex2=ob.nextDouble();
        Engineer eg=new Engineer();
        System.out.println("Engineer Salary: "+eg.calculateSalary(bs2,ex2));
    }
}
5)  SPECIAL CHARACTERS

import java.util.*;
class Demo
{
    public static void move(String str)
    {
        String x="";
        for(int i=0;i<str.length();i++)
        {
            if(!Character.isLetter(str.charAt(i)) && !Character.isDigit(str.charAt(i)))
            {
                x+=str.charAt(i);
            }
            else
            {
                System.out.print(str.charAt(i));
            }
        }
        System.out.println(x);
    }
}
class main
{
    public static void main(String[] args)
    {
        Scanner ob=new Scanner(System.in);
        String s=ob.nextLine();
        Demo d=new Demo();
        d.move(s);
    }
}

6) ONLINE SHOPPING PORTAL

import java.util.Scanner;

class Basic{
    String name,city;
    int age;
    String gender;
    int bill;
    void setter(String name, String city, int age, String gender, int bill){
        this.name = name;
        this.city = city;
        this.age = age;
        this.gender = gender;
        this.bill = bill;
    }
    void display(){
        System.out.println(name);
        System.out.println(city);
        System.out.println(age);
        System.out.println(gender);
        System.out.println(bill);
    }
    int calc(){
        if(bill >=1 && bill < 5000){
            return 100;
        }
        else if(bill >= 5000 && bill < 7500 ){
            return 250;
        }
        else if(bill >= 7500 && bill < 10000){
            return 500;
        }
        else if(bill >= 10000 && bill < 20000){
            return 750;
        }
        else if(bill >=20000 && bill < 30000){
            return 1000;
        }
        else{
            return 1500;
        }
    }
}

class Premium extends Basic{
    int bill;
    void set(int k){
        this.bill = k;
    }
    @Override int calc(){
        if(bill >=1 && bill < 5000){
            return 200;
        }
        else if(bill >= 5000 && bill < 7500 ){
            return 400;
        }
        else if(bill >= 7500 && bill < 10000){
            return 700;
        }
        else if(bill >= 10000 && bill < 20000){
            return 1000;
        }
        else if(bill >=20000 && bill < 30000){
            return 1500;
        }
        else{
            return 2000;
        }
    }
}

class Main{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        String city = sc.nextLine();
        int age = sc.nextInt();
        sc.nextLine();
        String gender = sc.nextLine();
        int bill = sc.nextInt();
        int m = sc.nextInt();
        if(m == 0){
            Basic b = new Basic();
            b.setter(name, city, age, gender, bill);
            b.display();
            System.out.print(b.calc());
        }
        else{
            int k = sc.nextInt();
            Premium p = new Premium();
            p.setter(name, city, age, gender, bill);
            p.display();
            System.out.println(k);
            p.set(bill);
            System.out.print(p.calc());
        }
    }
}



_______7) NaN NaN

import java.util.*;
import java.text.*;
abstract class Complex{
    abstract void func(int a,int b,int c,int d);
    DecimalFormat df = new DecimalFormat("0.0000");
}
class Addition extends Complex{
    void func(int a,int b,int c,int d){
        System.out.println("Addition:");
        System.out.print("\t");
        System.out.print(df.format(a+c) + " +");
        System.out.print(df.format(b+d) + " i\n");
    }
}
class Subtraction extends Complex{
    void func(int a,int b,int c,int d){
        System.out.println("Subtraction:");
        System.out.print("\t");
        System.out.print(df.format(a-c));
        if(b-d < 0)
            System.out.print(" ");
        else
            System.out.print(" +");
        System.out.print(df.format(b-d) + " i\n");
    }
}
class Multiplication extends Complex{
    void func(int a,int b,int c,int d){
        System.out.println("Multiplication:");
        System.out.print("\t");
        System.out.print(df.format(a*c - b*d));
        if(a*d + b*c < 0)
            System.out.print(" -");
        else
            System.out.print(" +");
        System.out.print(df.format(a*d + b*c) + " i\n");
    }
}
class Division extends Complex{
    void func(int a,int b,int c,int d){
        System.out.println("Division:");
        System.out.print("\t");
        if(c*c + d*d == 0){
            System.out.print("NaN NaN i");
            return;
        }
        System.out.print(df.format((a*c + b*d + 0.0) / (c*c + d*d)));
        if(b*c - a*d < 0)
            System.out.print(" ");
        else
            System.out.print(" +");
        System.out.print(df.format((b*c - a*d + 0.0) / (c*c + d*d)) + " i\n");
    }
}
class Main{
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int b = s.nextInt();
        int c = s.nextInt();
        int d = s.nextInt();
        Addition A = new Addition();
        Subtraction S = new Subtraction();
        Multiplication M = new Multiplication();
        Division D = new Division();
        A.func(a,b,c,d);
        S.func(a,b,c,d);
        M.func(a,b,c,d);
        D.func(a,b,c,d);
    }
}    	

8)  odd and even position SUM
        
   
import java.util.*;
interface Total{
    void sum(int n,int a[]);
}
class B implements Total{
    public void sum(int n,int a[]){
        for(int i=0;i<n;i++){
        System.out.print(a[i]+" ");
    }
    }
}
class Main{
    public static void main(String args[]){
    Scanner sc=new Scanner(System.in);
    int n=sc.nextInt();
    if(n%2!=0)
    System.out.println("Enter valid number");
    else{
        int a[]=new int[n];
        int sumO=0,sumE=0;
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt();
           if(i%2!=0)
           sumO+=sumO;
           else
           sumE+=sumE;
        }
        if(sumE>sumO){
            int d=0;int b[]=new int[n/2];
            for(int i=0;i<n;i++){
                if(i%2==0)
                b[d++]=a[i];
            }
            B obj=new B();
            obj.sum(d,b);
        }
        else{
            int d=0;int b[]=new int[n/2];
            for(int i=0;i<n;i++){
                if(i%2!=0)
                b[d++]=a[i];
            }
            B obj=new B();
            obj.sum(d,b);
        }
    }
}
}


9) BIRDS

import java.util.*;
class Birds
{
    Birds()
    {
        System.out.print("Birds: ");
    }
}
class Parrot extends Birds
{
    Parrot()
    {
        System.out.println("Grey Parrot");
    }
}
class Cocktail extends Parrot
{
    Cocktail()
    {
        System.out.println("Grey Cocoktail");
    }
}
class Kiwi extends Cocktail
{
    Kiwi()
    {
        System.out.println("Grey Kiwi");
    }
}
class main
{
    public static void main(String[] args)
    {
        Scanner ob=new Scanner(System.in);
        String s=ob.nextLine();
        if(s.equals("Parrot"))
        {
            Parrot p=new Parrot();
        }
        else if(s.equals("Cocktail"))
        {
            Cocktail c=new Cocktail();
        }
        else if(s.equals("Kiwi"))
        {
          Kiwi k=new Kiwi();
        }
    }
}


       
10) ITERATOR 

import java.util.*;
class Main
{
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        ArrayDeque<Integer> a=new ArrayDeque<Integer>();
        a.add(sc.nextInt());
        a.add(sc.nextInt());
        a.add(sc.nextInt());
        a.add(sc.nextInt());
        a.add(sc.nextInt());
        a.removeLast();
        Iterator<Integer> i=a.iterator();
        while(i.hasNext())
        {
            System.out.println(i.next());
        }
    }
}


11)  square, modulus, and division 

import java.util.*;
class Mathematics
{
    public void calculate(int x)
    {
        System.out.println("Square of "+x+": "+(x*x));
    }
    public void calculate(int x, int y)
    {
        System.out.println("Modulus of "+x+", "+y+": "+(x%y));
    }
    public void calculate(float m, float n)
    {
        System.out.println("Quotient of "+m+", "+n+": "+(m/n));
    }
}
class Main
{
    public static void main(String[] args)
    {
        Scanner ob=new Scanner(System.in);
        int a=ob.nextInt();
        int b=ob.nextInt();
        float c=ob.nextFloat();
        float d=ob.nextFloat();
        Mathematics obj=new Mathematics();
        obj.calculate(a);
        obj.calculate(a,b);
        obj.calculate(c,d);
    }
}


12) Bank
import java.util.*;
abstract class Bank
{
       public void getBalance()
       {
           
       }
}
class BankA extends Bank
{
	void getBalance(int n)
    {
        System.out.println("Deposited Balance is = "+n);
    }
}
class BankB extends Bank
{
    void getBalance(int n)
    {
        System.out.println("Deposited Balance is = "+n);
    }
}
class BankC extends Bank
{
    void getBalance(int n)
    {
        System.out.println("Deposited Balance is = "+n);
    }
    
}
class Main
{
  public static void main(String[] args)
    {
       int amt1,amt2,amt3;
       Scanner s =  new Scanner(System.in);
       amt1=s.nextInt();
       amt2=s.nextInt();
       amt3=s.nextInt();
       BankA Balance1 = new BankA();
       Balance1.getBalance(amt1);
       BankB Balance2 = new BankB();
       Balance2.getBalance(amt2);
       BankC Balance3 = new BankC();
       Balance3.getBalance(amt3);

   }

}


13)  GPA BILL

int sid;
String sname;
String dname;
String address;
int gpa;

import java.sql.*;
import java.util.Scanner;
class JDBCExample {
   static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
   static final String DB_URL = "jdbc:mysql://localhost/ri_db";

   static final String USER = "test";
   static final String PASS = "test123";
   
   public static void main(String[] args) {
   Connection conn = null;
   Connection myConn = null;
   Statement stmt = null;
   PreparedStatement st = null;
   try{
      Class.forName("com.mysql.jdbc.Driver");
      conn = DriverManager.getConnection(DB_URL, USER, PASS);
      stmt = conn.createStatement();
      String sql;
      Scanner sc =new Scanner(System.in);
      int n=Integer.parseInt(sc.nextLine());
      for(int i=0;i<n;i++) {
    	int sid =Integer.parseInt(sc.nextLine());
    	String sname =sc.nextLine();
    	String dname =sc.nextLine();
    	String address =sc.nextLine();
    	double gpa =Double.parseDouble(sc.nextLine());
        sql = "insert into BILL (sid,sname,dname,address,gpa) values(?,?,?,?,?)";
        st = conn.prepareStatement(sql);
        
        st.setInt(1, sid);
        st.setString(2, sname);
        st.setString(3, dname);
        st.setString(4, address);
        st.setDouble(5, gpa);
        
        st.execute();
      }
      
    String search = sc.nextLine();
     sql= "SELECT * FROM BILL Where DNAME='"+search+"'";
     ResultSet rs = stmt.executeQuery(sql);
     int count=0;
     while (rs.next())
      {
         count++;
        int sid = rs.getInt("SID");
        String sName = rs.getString("SNAME");
        String dName = rs.getString("DNAME");
        String address =    rs.getString("ADDRESS"); 
        double gpa =rs.getDouble("GPA");
        System.out.format("%s %s %s %s %s\n", sid, sName, dName, address,gpa);
      }
      if(count==0)
        System.out.println("No students in "+search+" department");

   }catch(SQLException se){

      se.printStackTrace();
   }catch(Exception e){

      e.printStackTrace();
   }finally{

      try{
         if(stmt!=null)
            conn.close();
      }catch(SQLException se){
      }
      try{
         if(conn!=null)
            conn.close();
      }catch(SQLException se){
         se.printStackTrace();
      }
   }
   
}
}


14)SALARAY RANGE 10000 AND 50000

import java.util.*;
import java.sql.*;
class Main{
public static void main(String args[])throws Exception{
    Scanner sc=new Scanner(System.in);
    Class.forName("com.mysql.jdbc.Driver");
    String url="jdbc:mysql://localhost/ri_db";
    String username="test";
    String  password="test123";
    String query="INSERT INTO OFFICE(EID,ENAME,ESALARY)VALUES(?,?,?);";
    Connection con=DriverManager.getConnection(url,username,password);
    PreparedStatement st=con.prepareStatement(query);
   int n=Integer.parseInt(sc.nextLine());
    for(int i=0;i<n;i++){
   int eid=Integer.parseInt(sc.nextLine());
    String ename=sc.nextLine();
   int esalary=sc.nextInt();
    st.setInt(1,eid);
    st.setString(2,ename);
    st.setInt(3,esalary);
    st.executeUpdate();
    }
    ResultSet rs=st.executeQuery("select * from OFFICE where esalary between 10000 and 50000");
    while(rs.next()){
    System.out.println(rs.getInt(1)+" "+rs.getString(2)+" "+rs.getInt(3));
    }
    st.close();
    con.close();
}
}

 15)toArray()
 
import java.util.*;
class Main
{
    public static void main(String[] args)
    {
        Scanner sc=new Scanner(System.in);
        ArrayList<String> al=new ArrayList<String>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++)
        {
            al.add(sc.next());
        }
        String[] s=al.toArray(new String[n]);
        for(String k:s)
        {
            System.out.println(k);
        }
    }
}


16)  INDEX X LINKED LIST


import java.util.*;
class Main {
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n=Integer.parseInt(sc.nextLine());
        LinkedList<String> l=new LinkedList<String>();
        for(int i=0;i<n;i++)
        l.add(sc.nextLine());
        int rem=Integer.parseInt(sc.nextLine());
        l.remove(rem-1);
        Iterator<String> it=l.iterator();
        while(it.hasNext())
        System.out.println(it.next());
    }

17)   EMAIL ADDRESS


import java.util.Scanner;
import java.io.*;
class DotException extends Exception
{
    public DotException(String str) 
    {
        super(str);
    }
}
class AtTheRateException extends Exception
{
    public AtTheRateException(String str) 
    {
        super(str);
    }
}
class DomainException extends Exception
{
    public DomainException(String str) 
    {
        super(str);
    }
}
class Main
{
    public static void main(String args[])
    {
        Scanner scan = new Scanner(System.in);
        String str = scan.nextLine();
        
        try
        {
            int dot=0,atRate=0;
            for(int i=0;i<str.length();i++)
            {
                if(str.charAt(i)=='.')
                    dot++;
                if(str.charAt(i)=='@')
                    atRate++;
            }
            
            if(dot!=1)
            {
                throw new DotException("Invalid Dot usage");
            }
            if(atRate!=1)
            {
                throw new AtTheRateException("Invalid @ usage");
            }
            if(!(str.contains("in") || str.contains("com") || str.contains("net") || str.contains("biz")))
            {
                throw new DomainException("Invalid Domain");
            }
            System.out.print("Valid email address");
        }
        catch(DotException e)
        {
            System.out.print(e);
            System.out.print("\nInvalid email address");
        }
        catch(AtTheRateException e)
        {
            System.out.print(e);
            System.out.print("\nInvalid email address");
        }
        catch(DomainException e)
        {
            System.out.print(e);
            System.out.print("\nInvalid email address");
        }
    }
}


  18)ArrayIndexOutOfBoundsException
import java.util.Scanner;
class Main
{
    public static void main(String args[])
    {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int arr[] = new int[n];
        for(int i=0;i<n;i++)
            arr[i] = scan.nextInt();
            
        int ind = scan.nextInt();
        try
        {
            System.out.println(arr[ind]);
        }
        catch(ArrayIndexOutOfBoundsException e)
        {
            System.out.println("Array index out of bound.");
        }
        
        
        int a = scan.nextInt();
        int b = scan.nextInt();
        try
        {
            System.out.println(a/b);
        }
        catch(Exception e)
        {
            System.out.println(e);
        }
        
        
        String str = null;
        ind = scan.nextInt();
        System.out.println(str);
        try
        {
            System.out.println(str.charAt(ind));
        }
        catch(NullPointerException e)
        {
            System.out.println(e);
        }
    }
}


19) "Eligible to vote". 

import java.util.*;
import java.io.*;
class main
{
    public static void main(String[] args)
    {
        Scanner ob=new Scanner(System.in);
        int n=ob.nextInt();
        try
        {
           if (n < 18) {
                throw new Exception("Not Eligible to vote");
            } 
            else {
                System.out.println("Eligible To Vote");
            }
        } 
        catch (Exception e) {
            System.out.println(e.getMessage());
            System.out.println("AgeException");
        }
    }
}



20) SCHOOL - CLASS SHAPE

import java.util.*;
class shape
{
    int a;
    int b;
    int c;
    shape(int a)
    {
        System.out.println(a*a);
    }
    shape(int b,int c)
    {
        System.out.println(b*c);
    }
}
class Main
{
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        int a=in.nextInt();
        int b=in.nextInt();
        int c=in.nextInt();
        shape s=new shape(a);
        shape s1=new shape(b,c);
    }
}


21) FREQUENCY

import java.util.Scanner;

class Mythread extends Thread{
	String str;
	static int n;
	public Mythread(String str) {
		super();
		this.str = str;
	}

	public void run() {
		 n = this.str.length(); 
		int[] freq = new int[26];
		
		for (int i = 0; i < n; i++) 
            freq[this.str.charAt(i) - 'a']++; 
  
        for (int i = 0; i < n; i++) { 
            if (freq[this.str.charAt(i) - 'a'] != 0) { 
                System.out.print(this.str.charAt(i)); 
                System.out.print(freq[this.str.charAt(i) - 'a']);  
                System.out.println();
              freq[this.str.charAt(i) - 'a'] = 0; 
            } 
	}
	
}
}
class MainThread{
	public static void main(String args[]) {
		Scanner sc =new Scanner(System.in);
		int n=Integer.parseInt(sc.nextLine());
		for(int i=0;i<n;i++) {
			String str= sc.nextLine();
			Mythread t2 =new Mythread(str);
			t2.start();
			System.out.println();
		}
		
		
	}
}



22. studentdetails form

.java file code

import javax.swing.*;
import java.awt.event.*;

public class StudentDetailsForm extends JFrame {
    private JLabel nameLabel, regNoLabel, cgpaLabel, genderLabel;
    private JTextField nameField, regNoField, cgpaField;
    private JCheckBox maleCheckBox, femaleCheckBox;
    private JButton submitButton;

    public StudentDetailsForm() {
        setTitle("Student Details Form");
        setSize(400, 250);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(null);

        nameLabel = new JLabel("Name:");
        nameLabel.setBounds(50, 30, 80, 20);
        add(nameLabel);

        nameField = new JTextField();
        nameField.setBounds(150, 30, 200, 20);
        add(nameField);

        regNoLabel = new JLabel("Reg No:");
        regNoLabel.setBounds(50, 60, 80, 20);
        add(regNoLabel);

        regNoField = new JTextField();
        regNoField.setBounds(150, 60, 200, 20);
        add(regNoField);

        cgpaLabel = new JLabel("CGPA:");
        cgpaLabel.setBounds(50, 90, 80, 20);
        add(cgpaLabel);

        cgpaField = new JTextField();
        cgpaField.setBounds(150, 90, 200, 20);
        add(cgpaField);

        genderLabel = new JLabel("Gender:");
        genderLabel.setBounds(50, 120, 80, 20);
        add(genderLabel);

        maleCheckBox = new JCheckBox("Male");
        maleCheckBox.setBounds(150, 120, 80, 20);
        add(maleCheckBox);

        femaleCheckBox = new JCheckBox("Female");
        femaleCheckBox.setBounds(250, 120, 80, 20);
        add(femaleCheckBox);

        submitButton = new JButton("Submit");
        submitButton.setBounds(150, 160, 100, 30);
        add(submitButton);

        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String name = nameField.getText();
                String regNo = regNoField.getText();
                String cgpa = cgpaField.getText();
                String gender = "";

                if (maleCheckBox.isSelected() && !femaleCheckBox.isSelected()) {
                    gender = "Male";
                } else if (!maleCheckBox.isSelected() && femaleCheckBox.isSelected()) {
                    gender = "Female";
                } else {
                    gender = "Not specified";
                }

                String welcomeMessage = "Welcome, " + name + "!\n" +
                                        "Reg No: " + regNo + "\n" +
                                        "CGPA: " + cgpa + "\n" +
                                        "Gender: " + gender;

                JOptionPane.showMessageDialog(null, welcomeMessage);
            }
        });
    }

    public static void main(String[] args) {
        StudentDetailsForm detailsForm = new StudentDetailsForm();
        detailsForm.setVisible(true);
    }
}

-------------------------------------------------------------------------------------

23. trainerfeedback form

.java file code

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TrainerFeedbackForm extends JFrame {
    private JCheckBox clarityCheckBox;
    private JCheckBox clarityCheckBox1;
    private JCheckBox doubtsCheckBox;
    private JCheckBox doubtsCheckBox1;
    private JCheckBox interactionCheckBox;
    private JCheckBox interactionCheckBox1;
    private JTextField ratingTextField;
    private JButton submitButton;

    public TrainerFeedbackForm() {
        setTitle("Trainer Feedback Form");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(5, 2));

        JLabel clarityLabel = new JLabel("Were the contents delivered clearly by the trainer?");
        clarityCheckBox = new JCheckBox("Yes");
        clarityCheckBox1 = new JCheckBox("No");
        add(clarityLabel);
        add(clarityCheckBox);
        add(clarityCheckBox1);

        JLabel doubtsLabel = new JLabel("Do the trainers clear all your doubts?");
        doubtsCheckBox = new JCheckBox("Yes");
        doubtsCheckBox1 = new JCheckBox("No");
        add(doubtsLabel);
        add(doubtsCheckBox);
        add(doubtsCheckBox1);

        JLabel interactionLabel = new JLabel("Do the trainers interact?");
        interactionCheckBox = new JCheckBox("Yes");
        interactionCheckBox1 = new JCheckBox("No");
        add(interactionLabel);
        add(interactionCheckBox);
        add(interactionCheckBox1);

        JLabel ratingLabel = new JLabel("Rate the trainer on a scale of 1 to 10:");
        ratingTextField = new JTextField();
        add(ratingLabel);
        add(ratingTextField);

        submitButton = new JButton("Submit");
        add(new JLabel()); // Placeholder
        add(submitButton);

        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Retrieve user feedback and rating
                clarityCheckBox.isSelected();
                clarityCheckBox1.isSelected();
                doubtsCheckBox.isSelected();
                doubtsCheckBox1.isSelected();
                interactionCheckBox.isSelected();
                interactionCheckBox1.isSelected();
                ratingTextField.getText();

                // Process the feedback and rating as needed (e.g., store in a database)

                // Show a confirmation dialog
                JOptionPane.showMessageDialog(null, "Feedback submitted successfully.");

                // Reset the form
                clarityCheckBox.setSelected(false);
                clarityCheckBox1.setSelected(false);
                doubtsCheckBox.setSelected(false);
                doubtsCheckBox1.setSelected(false);
                interactionCheckBox.setSelected(false);
                interactionCheckBox1.setSelected(false);
                ratingTextField.setText("");
            }
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                TrainerFeedbackForm feedbackForm = new TrainerFeedbackForm();
                feedbackForm.setVisible(true);
            }
        });
    }
}

----------------------------------------------------------------------------------------------

24. servlet 1 login page

.java file code

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
@WebServlet("/LoginServlet")
public class GenericServletApp1 extends GenericServlet{
    public void service(ServletRequest request,ServletResponse response)
    		throws ServletException,IOException
    {
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();
        String s1=request.getParameter("uname");
        String s2=request.getParameter("pass");
        out.println("<h1>"+s1+"</h1>");
        out.println("<h1>"+s2+"</h1>");
        out.println("<h1>"+"The entered details are valid"+"<h2>");
        out.println("<a href='Index.html'>Back</a>");        
        out.close();
    }
}

.html file code

<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    
    <form action="LoginServlet" method="post" style="margin-left: 40%;">
		<table>
			<tr>
				<td colspan="2" style="text-align: center;"><h1>Login</h1></td>
			</tr>
			<tr>
				<td>Enter UserName:</td>
				<td><input type="text" name="uname"></td>
			</tr>
			<tr>
				<td>Enter Password:</td>
				<td><input type="password" name="pass"></td>
			</tr>
			<tr>
				<td colspan="2" style="text-align: center;"><input type="submit" value="Click here to submit"></td>
			</tr>
		</table>
        
    </form>
</body>
</html>

------------------------------------------------------------------------------------------------------------
25. servlet 2 add two numbers

.java file code

import javax.servlet.*;
import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet("/servadd")
public class ssadd extends HttpServlet{
	public void service(HttpServletRequest req, HttpServletResponse res) throws ServletException,IOException
	{
	PrintWriter out = res.getWriter();
	res.setContentType("text/html");
	int a=Integer.parseInt(req.getParameter("t1"));
	int b=Integer.parseInt(req.getParameter("t2"));
	int c=a+b;
	out.println("Sum of two numbers are "+c);
	}
}


.html file code

<!DOCTYPE html>
<html>
<head>
    <title>Addition Page</title>
</head>
<body>
    
		<form action="servadd" method ="get" style="margin-left: 40%">
		<table>
			<tr>
				<td colspan="2" style="text-align: center;"><h1>Addition of two numbers</h1></td>
			</tr>
			<tr>
				<td>Enter number 1:</td>
				<td><input type="text" name="t1"></td>
			</tr>
			<tr>
				<td>Enter number 2:</td>
				<td><input type="text" name="t2"></td>
			</tr>
			<tr>
				<td colspan="2" style="text-align: center;"><input type="submit" value="Click here to submit"></td>
			</tr>
		</table>
        
    </form>
</body>
</html>
