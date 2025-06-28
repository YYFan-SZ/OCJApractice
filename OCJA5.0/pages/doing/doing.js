Page({
  data: {
    questions: [
      {
        id: 1,
        title: 'Question 1',
        content: `Given:\n\npublic class TestTry {\n    public static void main (String[] args) {\n        StringBuilder message = new StringBuilder("hello java!");\n        int pos =0;\n        try {\n            for ( pos = 0;pos < 12; pos++) {\n                switch (message.charAt(pos)) {\n                    case 'a':\n                    case 'e':\n                    case 'o':\n                     String uc=Character.toString(message.charAt(pos)).toUpperCase();\n                     message.replace(pos,pos+1,uc);\n                   }\n            }\n        } catch (Exception e) {\n            System.out.println("Out of limits");\n        }\n        System.out.println(message);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. hEllOjAvA!',
          'B. Hello java!',
          'C. Out of limits hEllOjAvA!',
          'D. Out of limits'
        ],
        answer: 'C',
        explanation: 'for循环会越界抛出异常，catch块输出Out of limits，message内容为hEllOjAvA!'
      },
      {
        id: 2,
        title: 'Question 2',
        content: `Given the code fragment:\n\n1.public class Test{\n2.    public static void main(String[] args){ \n3.        /* insert code here */\n4.        array [0]=10;\n5.        array [1]=20;\n6.        System.out.print(array[0]+":"+array[1]);\n7.    }\n8. }\n\nWhich code fragment, when inserted at line 3, enables the code to print 10:20?`,
        options: [
          'A. int[] array= new int[2];',
          'B. int[] array; array = int[2];',
          'C. int array = new int[2];',
          'D. int array [2] ;'
        ],
        answer: 'A',
        explanation: '只有选项A正确声明并初始化了一个长度为2的int数组'
      },
      // 其他题目数据...
      {
        id: 3,
        title: 'Question 3',
        content: `Given:\n\nclass X{\n    static int i;\n    int j;\n    public static void main(String[] args){ \n      X x1 = new X();\n      X x2 = new X();\n      x1.i = 3;\n      x1.j = 4;\n      x2.i = 5;\n      x2.j = 6;\n      System.out.println(\n          x1.i + " " +\n          x1.j + " " +\n          x2.i + " " +\n          x2.j);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 3 4 5 6',
          'B. 3 4 3 6',
          'C. 5 4 5 6',
          'D. 3 6 4 6'
        ],
        answer: 'C',
        explanation: ''
      },
      {
        id: 4,
        title: 'Question 4',
        content: `Given:\n\npublic class CharToStr {\n  public static void main(String[] args) {\n    String str1 = "Java";\n    char str2[] = { 'J', 'a','v','a' };\n    String str3 = null;\n      for (char c : str2) {\n         str3 = str3 + c;\n      }\n      if (str1.equals(str3))\n        System.out.print("Successful");\n      else\n        System.out.print("Unsuccessful");\n   }\n}\n\nWhat is result?`,
        options: [
          'A. Successful',
          'B. Unsuccessful',
          'C. Compilation fails',
          'D. An exception is thrown at'
        ],
        answer: 'B',
        explanation: ''
      },
      {
        id: 5,
        title: 'Question 5',
        content: `Given:\n\nclass Sports { \nint num_players;\nString name, ground_condition;\nSports(int np, String sname, String sground){ \nnum_players = np;\nname = sname;  \nground_condition = sground;\n}\n}\n\nclass Cricket extends Sports { \nint num_umpires;\nint num_substitutes;\n}\nWhich code fragment can be inserted at line //insert code here to enable the code to compile?`,
        options: [
          'A. Cricket() {\nsuper(11, "Cricket", "Condidtion OK"); num_umpires =3; num_substitutes=2;\n}',
          'B. Cricket() {\nsuper.ground_condition = "Condition OK"; super.name="Cricket"; super.num_players = 11;\nnum_umpires =3; num_substitutes=2;\n}',
          'C. Cricket() { this(3,2);\nsuper(11, "Cricket", "Condidtion OK");\n}\nCricket(int nu, ns) { this.num_umpires =nu; this.num_substitutes=ns;\n}',
          'D. Cricket() { this.num_umpires =3; this.num_substitutes=2;\nsuper(11, "Cricket", "Condidtion OK");\n}'
        ],
        answer: 'A',
        explanation: 'Incorrect:not C, not D: call to super must be the first statement in constructor.'
      }
      ,
      {
        id: 6,
        title: 'Question 6',
        content: `Given:\n\npublic class Calculator{\n    public static void main(String[] args){\n        int num = 5;\n        int sum;\n        do {\n            sum += num;\n        }while((num--)>1);\n        System.out.println("The sum is" + sum + ".");\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. The sum is 2',
          'B. The sum is 14',
          'C. The sum is 15',
          'D. The loop executes infinite',
          'E. Compilation fails'
        ],
        answer: 'E',
        explanation: 'sum未初始化导致编译错误'
      },
      {
        id: 7,
        title: 'Question 7',
        content: `Given the code fragment:\n\nPublic class Test {\n    static int count = 0 ;\n    int i = 0;\n    public void changeCount(){\n        while (i<5){\n            i++;\n            count++;\n        }\n    }\n    public static void main (String[] args){\n        Test check1=new Test();\n        Test check2=new Test();\n        Check1.changeCount();\n        Check2.changeCount();\n        System.out.print(check1.count + ":" + check2.count);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 10 : 10',
          'B. 5 : 5',
          'C. 5 : 10',
          'D. Compilation fails'
        ],
        answer: 'A',
        explanation: 'count是静态变量，被所有实例共享'
      },
      {
        id: 8,
        title: 'Question 8',
        content: `Which two items can legally be contained within a java class declaration?`,
        options: [
          'A. An import statement',
          'B. A field declaration',
          'C. A package declaration',
          'D. A method declaration'
        ],
        answer: 'B,D',
        explanation: 'Java类声明中合法地包含哪两个项'
      },
      {
        id: 9,
        title: 'Question 9',
        content: `Given the class definitions:\n\nclass Alpha {\n    public String doStuff(String msg){\n        return msg;\n    }\n}\n\nclass Beta extends Alpha {\n    public String doStuff(String msg){\n        return msg.replace('a','e');\n    }\n}\n\nclass Camma extends Beta {\n    public String doStuff(String msg){\n        return msg.substring(2);\n    }\n}\n\nAnd the code fragment of the main() method,\n\n12. List<Alpha> strs=new ArrayList<Alpha>();\n13. strs.add(new Alpha());\n14. strs.add(new Beta());\n15. strs.add(new Gamma());\n16. for(Alpha t:strs){\n17.     System.out.println(t.doStuff("Java"));\n18. }\n\nWhat is the result?`,
        options: [
          'A. Java Java Java',
          'B. Java Jeve va',
          'C. Java Jeve ve',
          'D. Compilation fails'
        ],
        answer: 'B',
        explanation: '多态调用，实际执行各子类重写的方法'
      },
      {
        id: 10,
        title: 'Question 10',
        content: `int [] array = {1,2,3,4,5};\nfor (int i: array) {\n    if ( i < 2) { keyword1 ;}\n    System.out.println(i);\n    if ( i == 3) { keyword2 ;}\n}\n\nWhat should keyword1 and keyword2 be respectively, in oreder to produce output 2345?`,
        options: [
          'A. continue, break',
          'B. break, break',
          'C. break, continue',
          'D. continue, continue'
        ],
        answer: 'D',
        explanation: '跳过1，输出2345'
      },
      {
        id: 11,
        title: 'Question 11',
        content: `Given:\n\nint x=10;\nif(x>10){\n    System.out.println(">");\n}else if(x<10){\n    System.out.println("<");\n}else{\n    System.out.println("=");\n}\n\nWhich of the following is equivalent to the above code fragment?`,
        options: [
          'A. System.out.printLn(x>10?">,\': "<":,\'=");',
          'B. System.out.println(x>10? ">"?"<":"=");',
          'C. System.out.println(x>10?">":x<10?"<":"=");',
          'D. System.out.printLn(x>10?">"?,\'<"?=");',
          'E. None of the above'
        ],
        answer: 'C',
        explanation: '三目运算符嵌套实现相同逻辑'
      },
      {
        id: 12,
        title: 'Question 12',
        content: `Given the code fragment:\n\nint num[][] = new int[1][3];\nfor (int i = 0; i < num.length; i++){\n    for(int j = 0; j< num[i].length; j++){\n        num[i][j] = 10;\n    }\n}\n\nWhich option represents the state of the num array after successful completion of the outer loop?`,
        options: [
          'A. num[0][0]=10\nnum[0][1]=10\nnum[0][2]=10',
          'B. num[0][0]=10\nnum[1][0]=10\nnum[2][0]=10',
          'C. num[0][0]=10\nnum[0][1]=0\nnum[0][2]=0',
          'D. num[0][0]=10\nnum[0][1]=10\nnum[0][2]=10\nnum[0][3]=10\nnum[1][0]=0\nnum[1][1]=0\nnum[1][2]=0\nnum[1][3]=0'
        ],
        answer: 'A',
        explanation: '二维数组初始化后所有元素被赋值为10'
      },
      {
        id: 13,
        title: 'Question 13',
        content: `Given:\n\npublic class Test3 {\n    public static void main(String[] args) {\n        String names[] = new String[3];\n        names[0] = "Mary Brown";\n        names[1] = "Nancy Red";\n        names[2] = "Jseey Orange";\n        try {\n            for (String n:names) {\n                try {\n                    String pwd=n.substring(0,3)+n.substring(6,10);\n                    System.out.println(pwd);\n                } catch (StringIndexOutOfBoundsException sie) {\n                    System.out.println("string out of limits");\n                }\n            }\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println("array out of limits");\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Marrown String out of limits JesOran',
          'B. Marrown String out of limits Array out of limits',
          'C. Marrown String out of limits',
          'D. Marrown NanRed JesOran'
        ],
        answer: 'A',
        explanation: '第二个名字长度不足导致StringIndexOutOfBoundsException'
      },
      {
        id: 14,
        title: 'Question 14',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    int iArray[] = {65, 68, 69};\n    iArray[2] = iArray[0];\n    iArray[0] = iArray[1];\n    iArray[1] = iArray[2];\n    for (int element : iArray) {\n        System.out.print(element + " ");\n    }\n}`,
        options: [
          'A. 68, 65, 69',
          'B. 68, 65, 65',
          'C. 65, 68, 65',
          'D. 65, 68, 69',
          'E. Compilation fails'
        ],
        answer: 'B',
        explanation: '数组元素交换后的结果'
      },
      {
        id: 15,
        title: 'Question 15',
        content: `Given:\n\npublic class Natural {\n    private int i;\n    void disp() {\n        while (i <= 5) {\n            for (int i=1; i <=5;) {\n                System.out.print(i + " ");\n                i++;\n            }\n            i++;\n        }\n    }\n    public static void main(String[] args) {\n        new Natural().disp();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Prints 1 2 3 4 5 once',
          'B. Prints 1 3 5 once',
          'C. Prints 1 2 3 4 5 five times',
          'D. Prints 1 2 3 4 5 six times',
          'E. Compilation fails'
        ],
        answer: 'D',
        explanation: '1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5 1 2 3 4 5'
      },
      {
        id: 16,
        title: 'Question 16',
        content: `Given:\n\npublic class Vowel {\n    private char var;\n    public static void main(String[] args) {\n        char var1='a';\n        char var2=var1;\n        var2='e';\n        Vowel obj1=new Vowel();\n        Vowel obj2=new Vowel();\n        obj1.var='i';\n        obj2.var='o';\n        System.out.println(var1+","+var2);\n        System.out.println(obj1.var+","+obj2.var);\n    }\n}`,
        options: [
          'A. a, e i, o',
          'B. a, e o, o',
          'C. e, e I, o',
          'D. e, e o, o'
        ],
        answer: 'A',
        explanation: '基本类型和对象引用的区别'
      },
      {
        id: 17,
        title: 'Question 17',
        content: `Given:\n\npublic abstract class Shape {\n    private int x;\n    private int y;\n    public abstract void draw();\n    public void setAnchor(int x,int y){\n        this.x=x;\n        this.y=y;\n    }\n}\n\nWhich two classes use the shape class correctly?`,
        options: [
          'A)public class Circle implements Shape{\nprivate int radius;\n}',
          'B)public abstract class Circle implements Shape{\nprivate int radius;\n}',
          'C)public class Circle extends Shape{\nprivate int radius;\npublic void draw();\n}',
          'D)public abstract class Circle implements Shape{\nprivate int radius;\npublic void draw();\n}',
          'E)public class Circle extends Shape{\nprivate int radius;\npublic void draw();{/*code here*/}\n}',
          'F)public abstract class Circle implements Shape{\nprivate int radius;\npublic void draw();{/*code here*/}\n}'
        ],
        answer: 'B,E',
        explanation: '抽象类可以被继承，子类需要实现所有抽象方法'
      },
      {
        id: 18,
        title: 'Question 18',
        content: `Given the code fragment:\n\npublic class Employee {\n    String name;\n    boolean contract;\n    double salary;\n    Employee() {\n        // line n1\n    }\n    public String toString(){\n        return name + ":" + contract + ":" + salary;\n    }\n    public static void main(String[] args) {\n        Employee e = new Employee();\n        // line n2\n        System.out.print(e);\n    }\n}\n\nWhich two modifications, when made independently, enable the code to print Joe:true: 100.0?`,
        options: [
          'A)Replace line n2 with;\ne.name = "Joe";\ne.contract = true;\ne.salary = 100;',
          'B)Replace line n2 with;\nthis.name = "Joe";\nthis.contract = true;\nthis.salary = 100;',
          'C)Replace line n1 with;\nthis.name = new String("Joe");\nthis.contract = new Boolean(true);\nthis.salary = new Double(100);',
          'D)Replace line n1 with;\nname = "Joe";\ncontract = TRUE;\nsalary = 100.0f;',
          'E)Replace line n1 with;\nthis("Joe", true, 100);'
        ],
        answer: 'A,C',
        explanation: '两种方式初始化Employee对象'
      },
      {
        id: 19,
        title: 'Question 19',
        content: `Given the following code:\n\nint[] intArr = {15, 30, 45, 60, 75};\nintArr[2] = intArr[4];\nintArr[4] = 90;\n\nWhat are the values of each element in intArr after this code has executed?`,
        options: [
          'A. 15, 60, 45, 90, 75',
          'B. 15, 90, 45, 90, 75',
          'C. 15, 30, 75, 60, 90',
          'D. 15, 30, 90, 60, 90',
          'E. 15, 4, 45, 60, 90'
        ],
        answer: 'C',
        explanation: '数组元素交换后的结果'
      },
      {
        id: 20,
        title: 'Question 20',
        content: `Given:\n\nclass Vehicle {\n    int x;\n    Vehicle(){\n        this(10); //line n1\n    }\n    Vehicle(int x){\n        this.x = x;\n    }\n}\n\nclass Car extends Vehicle {\n    int y;\n    Car() {\n        super();\n        this(20); //line n2\n    }\n    Car(int y) {\n        this.y = y;\n    }\n    public String toString() {\n        return super.x + ":" + this.y;\n    }\n}\n\nAnd given the code fragment:\n\nVehicle y = new Car();\nSystem.out.println(y);\n\nWhat is the result?`,
        options: [
          'A. 10:20',
          'B. 0:20',
          'C. Compilation fails at line n1',
          'D. Compilation fails at line n2'
        ],
        answer: 'D',
        explanation: '构造函数中this()和super()不能同时调用'
      },
      {
        id: 21,
        title: 'Question 21',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    ArrayList myList=new ArrayList();\n    String[] myArray;\n    try{\n        while (true){\n            myList.add("My String");\n        }\n    }\n    catch (RuntimeException re) {\n        System.out.println("Caught a RuntimeException");\n    }\n    catch (Exception e) {\n        System.out.println("Caught an Exception");\n    }\n    System.out.println("Ready to use");\n}\n\nWhat is the result?`,
        options: [
          'A. Execution terminates in the first catch statement, and caught a RuntimeException is printed to the console.',
          'B. Execution terminates In the second catch statement, and caught an Exception is printed to the console.',
          'C. A runtime error is thrown in the thread "main".',
          'D. Execution completes normally, and Ready to us© is printed to the console.',
          'E. The code fails to compile because a throws keyword is required.'
        ],
        answer: 'C',
        explanation: '抛出：java.lang.OutOfMemoryError: Java heap space'
      },
      {
        id: 22,
        title: 'Question 22',
        content: `Given:\n\nclass Product{\n    double price:\n}\n\npublic class Test{\n    public void updatePrice(Product product,double price){\n        price=price*2;\n        product.price=product.price+price;\n    }\n    public static void main(String[] args){\n        Product prt=new Product();\n        prt.price=200;\n        double newPrice=100;\n        Test t=new Test();\n        t.updatePrice(prt, newPrice);\n        System.out.println(prt.price +" : "+newPrice);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 200.0 : 100.0',
          'B. 400.0 : 200.0',
          'C. 400.0 : 100.0',
          'D. Compilation fails.'
        ],
        answer: 'C',
        explanation: '对象引用和基本类型参数的区别'
      },
      {
        id: 23,
        title: 'Question 23',
        content: `Given:\n\nabstract class X{\n    public abstract void methodx();\n}\n\ninterface Y{\n    public void methodY();\n}\n\nWhich two code fragments are valid?`,
        options: [
          'A)class Z extends X implements Y{\n    public void methodZ(){}\n}',
          'B)abstract class Z extends X implements Y{\n    public void methodZ(){}\n}',
          'C)class Z extends X implements Y{\n    public void methodX(){}\n}',
          'D)abstract class Z extends X implements Y{\n}',
          'E)class Z extends X implements Y{\n    public void methodY(){}\n}'
        ],
        answer: 'B,C',
        explanation: '抽象类可以包含未实现的方法'
      },
      {
        id: 24,
        title: 'Question 24',
        content: `Given:\n\nclass Test {\n    public static void main(String[] args){\n        int numbers[];\n        numbers = new int[2];\n        numbers[0] = 10;\n        numbers[1] = 20;\n        numbers = new int[4];\n        numbers[2] = 30;\n        numbers[3] = 40;\n        for (int x:numbers){\n            System.out.print(" "+x);\n        }\n    }\n}\n\nwhat is the result?`,
        options: [
          'A)10 20 30 40',
          'B)Complication fails\'',
          'C)An exception is thrown at runtime',
          'D)0 0 30 40'
        ],
        answer: 'D',
        explanation: '数组重新初始化后前两个元素为0'
      },
      {
        id: 25,
        title: 'Question 25',
        content: `Given:\n\nSystem.out.println("5+2= "+3+4);\nSystem.out.println("5+2="+(3+4));\n\nWhat is the result?`,
        options: [
          'A) 5+2 =34 5+2 =34',
          'B) 5+2+3+4 5+2=7',
          'C) 7=7 7+7',
          'D) 5+2=34 5+2=7'
        ],
        answer: 'D',
        explanation: '字符串连接和运算优先级'
      },
      {
        id: 26,
        title: 'Question 26',
        content: `Given the definitions of the MyString class and the Test class:\n\nMyString.java:\n\nPackage p1;\nClass Mystring{\n    String msg;\n    Mystring (String msg){\n        This.msg = msg;\n    }\n}\n\nTest.java:\n\nPackage p1;\nPublic class Test{\n    Public static void main (String[] args){\n        System.out.println("Hello"+new StringBuilder ("Java SE 8 "));\n        System.out.println("Hello"+ new Mystring("Java SE 8"));\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) Hello Java SE 8 Hello Java SE 8',
          'B) Hello java.lang.StringBuilder@<<hashcode1>> Hello p1.Mystring@<<hashcode2>>',
          'C) Hello Java SE 8 Hello p1.MyString@<<hashcode>>',
          'D) Compilation fails at the Test class'
        ],
        answer: 'C',
        explanation: 'toString()方法默认输出'
      },
      {
        id: 27,
        title: 'Question 27',
        content: `Class B { }\nInterface X { } Interface Y { }\n\nWhich two definitions of class C are valid?`,
        options: [
          'A. Class C extends A implements X { }',
          'B. Class C implements Y extends B { }',
          'C. Class C extends A, B { }',
          'D. Class C implements X, Y extends B { }',
          'E. Class C extends B implements X, Y { }'
        ],
        answer: 'A,E',
        explanation: 'extends是用于继承类，implements用于实现接口'
      },
      {
        id: 28,
        title: 'Question 28',
        content: `Given:\n\n1. Public class Whizlabs{\n2. Public static void main (String[] args){\n3. Int sum=0;\n4.\n5. For(int x = 0; x<=10;x++)\n6. Sum+=x;\n7. System.out.print("Sum for 0 to"+x);\n8. System.out.println("="+sum);\n9. }\n10. }\n\nWhich is true?`,
        options: [
          'A. Sum for 0 to 0 = 55',
          'B. Sum for 0 to 10 = 55',
          'C. Compilation fails due to error on line 6.',
          'D. Compilation fails due to error on line 7.',
          'E. An Exception is thrown at the runtime.'
        ],
        answer: 'D',
        explanation: '循环变量x在循环外不可访问'
      },
      {
        id: 29,
        title: 'Question 29',
        content: `You are developing a banking module. You have developed a class named CCMask that has a maskcc method.\n\nGiven the code fragment:\n\nClass CCMask{\n    public static String maskCC(String ceditCard){\n        String x="XXXX-XXXX-XXXX-";\n        //line n1\n    }\n    public static void main (String [ ] args){\n        System.out.println(maskCC("1234-5678-9101-1121"));\n    }\n}\n\nYou must ensure that the maskcc method returns a string that hides all digits of the credit card number except the four last digits (and the hyphens that separate each group of four digits).\n\nWhich two code fragments should you use at line n1, independently, to achieve this requirement?`,
        options: [
          'A) StringBuilder sb = new StringBuilder(creditCard);\nsb.substring(15,19);\nreturn x + sb;',
          'B) Return x + creditCard.substring(15,19);',
          'C) StringBuilder sb = new StringBuilder(x);\nsb.append(creditCard,15,19);\nreturn sb.toString();',
          'D) StringBuilder sb =new StringBuilder(creditCard);\nStringBuilder s = sb.insert(0,x);\nreturn s.toString();'
        ],
        answer: 'B,C',
        explanation: '两种方式截取最后四位数字'
      },
      {
        id: 30,
        title: 'Question 30',
        content: `Given the fragment:\n\nString[][] arra = new String[3][];\n\narra[0] = new String[]{"rose", "lily"};\n\narra[1] = new String[]{"apple", "berry","cherry","grapes"};\n\narra[0] = new String[]{"beans", "carrot","potato"};\n\n// insert code fragment here\n\nWhich code fragment when inserted at line '// insert code fragment here', enables the code to successfully change arra elements to uppercase?`,
        options: [
          'A. String[][] arra = new String[3][];\n\narra[0] = new String[]{"rose", "lily"};\n\narra[1] = new String[]{"apple", "berry","cherry","grapes"};\n\narra[0] = new String[]{"beans", "carrot","potato"};\n\nfor (int i = 0; i < arra.length; i++) {\n    for (int j=0; j < arra[i].length; j++) {\n        arra[i][j] = arra[i][j].toUpperCase();\n    }\n}',
          'B. for (int i = 0; i < 3; i++) {\n    for (int j=0; j < 4; j++) {\n        arra[i][j] = arra[i][j].toUpperCase();\n    }\n}',
          'C. for (String a[]:arra[][]) { for (String x:a[]) {\n    toUpperCase();\n}\n}',
          'D. for (int i:arra.length) {\n    for (String x:arra) { arra[i].toUpperCase();}\n}'
        ],
        answer: 'A',
        explanation: '正确遍历二维数组并转换大写'
      },
      {
        id: 31,
        title: 'Question 31',
        content: `Which of the following can fill in the blank in this code to make it compile?\n\ninterface CanFly{\n    String tyoe = "A";\n    void fly();\n}\n\n___ String getType(){\n    return type;\n}`,
        options: [
          'A. abstract',
          'B. public',
          'C. default',
          'D. It will not compile with any as interfaces cannot have non abstract methods.',
          'E. It will compile without filling the blank.'
        ],
        answer: 'C',
        explanation: '接口中可以使用default方法'
      },
      {
        id: 32,
        title: 'Question 32',
        content: `Given:\n\nint sum = 0;\npublic void doCheck(int number){\n    if (number %2 == 0){\n        break;\n    }else{\n        for (int i = 0; i < number;i++){\n            sum += i;\n        }\n    }\n}\npublic static void main (String[] args){\n    Test obj= new Test();\n    System.out.println("Red"+obj.sum);\n    obj.doCheck(2);}\n}\n\nWhat is the result?`,
        options: [
          'A. Red 0 Orange 0 Green 3',
          'B. Red 0\nOrange 0\nGreen 6',
          'C. Red 0 Orange 1',
          'D. Green 4',
          'E. Compilation fails'
        ],
        answer: 'E',
        explanation: 'break关键字只能用于循环语句中。条件语句不能使用break、continue'
      },
      {
        id: 33,
        title: 'Question 33',
        content: `Given:\n\npublic class MyClass {\n    public static void main(String[] args) { while (int ii = 0; ii < 2) {\n        ii++;\n        System.out.println("ii = " + ii);\n    }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. ii = 1 ii = 2',
          'B. Compilation fails',
          'C. The program prints nothing',
          'D. The program goes into an infinite loop with no output',
          'E. The program goes to an infinite loop outputting:\nii = 1\nii = 1'
        ],
        answer: 'B',
        explanation: 'while语句语法错误'
      },
      {
        id: 34,
        title: 'Question 34',
        content: `Public static void main(String[] args){\n    String[] arr ={"A","B","C","D"};\n    for (int i =0;i< arr.length; i++){\n        System.out.print(arr[i]+ " ");\n        if (arr[i].equals("c")){\n            continue;\n        }\n        System.out.println("Work done");\n        break;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. A B C Work done',
          'B. A B C D Work done',
          'C. A Work done',
          'D. Compilation fails'
        ],
        answer: 'C',
        explanation: '第一次循环输出A Work done后break'
      },
      {
        id: 35,
        title: 'Question 35',
        content: `Given the classes:\n\n* AssertionError\n* ArithmeticException\n* ArrayIndexOutofBoundsException\n* FileNotFoundException\n* IllegalArgumentException\n* IOError\n* IOException\n* NumberFormatException\n* SQLException\n\nWhich option lists only those classes that belong to the unchecked exception category?`,
        options: [
          'A. AssertionError, ArrayIndexOutOfBoundsException, ArithmeticException',
          'B. AssertionError, IOError, IOException',
          'C. ArithmeticException, FileNotFoundException, NumberFormatException',
          'D. FileNotFoundException, IOException, SQLException',
          'E. ArrayIndexOutOfBoundException, IllegalArgumentException, FileNotFoundException'
        ],
        answer: 'A',
        explanation: '未检查异常列表'
      },
      {
        id: 36,
        title: 'Question 36',
        content: `Given:\n\n1. public class Whizlabs{\n2. private String name;\n3. private Boolean pass;\n4.\n5. public static void main(String[] args){\n6. Whizlabs wb = new Whizlabs();\n7. System.out.print("name="+wb.name);\n8. System.out.print(",pass ="+wb.pass);\n9. }\n10.}\n\nWhat would be the output, if it is executed as a program?`,
        options: [
          'A. name =, pass =',
          'B. name = null, pass = null',
          'C. name = null, pass = false',
          'D. name = null pass = true',
          'E. Compile error.'
        ],
        answer: 'C',
        explanation: 'String默认值为null，Boolean默认值为false'
      },
      {
        id: 37,
        title: 'Question 37',
        content: `Which of the following data types will allow the following code snippet to compile?\n\nFloat i =4;\nFloat j =2;\n_____z=i+j;`,
        options: [
          'A. long',
          'B. double',
          'C. int',
          'D. float',
          'E. byte'
        ],
        answer: 'B,D',
        explanation: 'float相加结果需要double或float类型存储'
      },
      {
        id: 38,
        title: 'Question 38',
        content: `Which three statements describe the object-oriented features of the Java language?`,
        options: [
          'A. Objects cannot be reused.',
          'B. A subclass can inherit from a superclass.',
          'C. Objects can share behaviors with other objects.',
          'D. A package must contain more than one class.',
          'E. Object is the root class of all other objects.',
          'F. A main method must be declared in every class.'
        ],
        answer: 'B,C,E',
        explanation: 'Java面向对象特性：继承、多态、Object是所有类的根类'
      },
      {
        id: 39,
        title: 'Question 39',
        content: `Given the code fragment:\n\nString[ ] strs = new String[2];\nint idx =0;\nfor (String s : strs) {\n    strs[idx].concat("element" + idx);\n    idx++;\n}\nfor (idx = 0; idx < strs.length; idx++){\n    System.out.println(strs[idx]);\n}\n\nWhat is the result?`,
        options: [
          'A.Element 0\nElement 1',
          'B.Null element 0 Null element 1',
          'C.Null Null',
          'D.A NullPointerException is thrown at runtime'
        ],
        answer: 'D',
        explanation: '数组未初始化元素导致NullPointerException'
      },
      {
        id: 40,
        title: 'Question 40',
        content: `Given:\n\n1. class X{\n2. public void printFileContent(){\n3. /*code goes here*/\n4. throw new IOException();\n5. }\n6. }\n7. public class Test {\n8. public static void main (String [ ] args ){\n9. X xobj = new X();\n10. xobj.printFileContent();\n11. }\n12. }\n\nWhich two modifications should you make so that the code compiles successfully?`,
        options: [
          'A) Replace line8 with public static void main (String[] args )throws Exception{',
          'B) Replace line 10 with;\ntry {\nxobj.printFileContent();\n}catch(Exception e){ }\ncatch (Exception e){ }',
          'C) Replace line2 with public void printFileContent() throws IOException{',
          'D) Replace line4 with throw IOException("Exception raised");',
          'E) At line 11,insert throw new IOException();'
        ],
        answer: 'A,C',
        explanation: '需要添加throws声明'
      },
      {
        id: 41,
        title: 'Question 41',
        content: `You are asked to develop a program for a shopping application, and you are given the following information:\n\n- The application must contain the classes Toy, EduToy, and consToy. The Toy class is the superclass of the other two classes.\n- The int caicuiatePrice (Toy t) method calculates the price of a toy.\n- The void printToy (Toy t) method prints the details of a toy.\n\nWhich definition of the Toy class adds a valid layer of abstraction to the class hierarchy?`,
        options: [
          'A) public abstract class Toy{\npublic abstract int calculatePrice(Toy t);\npublic void printToy(Toy t){ /* code goes here*/ }',
          'B) public abstract class Toy {\npublic int calculatePrice(Toy t) ;\npublic void printToy(Toy t) ;',
          'C) public abstract class Toy{\npublic int calculatePrice(Toy t);\npublic final void printToy(Toy t){ /* code goes here * /}',
          'D) public abstract class Toy{\npublic abstract int calculatePrice(Toy t) { /* code goes here */}\npublic abstract void printToy(Toy t){ /* code goes here*/ }'
        ],
        answer: 'A',
        explanation: '抽象类正确实现'
      },
      {
        id: 42,
        title: 'Question 42',
        content: `Given:\n\nBase.java:\n\nclass Base{\n    public void test(){\n        System.out.println("Base");\n    }\n}\n\nclass DeriveredA extends Base{\n    public void test(){\n        System.out.println("DerivedA");\n    }\n}\n\nclass DeriveredB extends DeriveredA{\n    public void test(){\n        System.out.println(" DeriveredB");\n    }\n    public static void main(String[] args) {\n        Base b1=new DeriveredB();\n        Base b2=new DeriveredA();\n        Base b3=new DeriveredB();\n        b1=(Base)b3;\n        Base b4= (DeriveredA) b3;\n        b1.test();\n        b4.test();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Base DerivedA',
          'B. Base DerivedB',
          'C. DerivedB DerivedB',
          'D. DerivedB DerivedA',
          'E. A classcast Except ion is thrown at runtime.'
        ],
        answer: 'C',
        explanation: '多态调用实际类型的方法'
      },
      {
        id: 43,
        title: 'Question 43',
        content: `Given:\n\npublic class SumTest{\n    public static void doSum (Integer x, Integer y){\n        System.out.println("Integer sum is" + (x+y));\n    }\n    public static void doSum(double x,double y){\n        System.out.println("double sum is"+(x+y));\n    }\n    public static void doSum (float x,float y){\n        System.out.println("float sum is"+(x+y));\n    }\n    public static void doSum (int x, int y){\n        System.out.println("int sum is"+(x+y));\n    }\n    public static void main (String[] args){\n        doSum (10,20);\n        doSum(10.0,20.0);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) int sum is 30\nfloat sum is 30.0',
          'B) int sum is 30\ndouble sum is 30',
          'C) Integer sum is 30\nDouble sum is 30.0',
          'D) Integer sum is 30\nFloat sum is 30.0'
        ],
        answer: 'B',
        explanation: '方法重载匹配规则'
      },
      {
        id: 44,
        title: 'Question 44',
        content: `Given:\n\npublic class Test2{\n    public static void doChange (int[] arr){\n        for(int pos,=0; pos < arr.length: pos++){\n            arr[ pos]=arr[ pos]+1;\n        }\n    }\n    public static void main(String[] args)(\n        int[] arr =(10,20,30);\n        doChange(arr);\n        for(int x: arr){\n            System. out. print(x+", ");\n        }\n        doChange(arr[0], arr[1], arr[2]);\n        System. out. print (arr[0]+","+arr[1l]+","+arr[2]);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 11, 21, 31, 11, 21, 31',
          'B. 11, 21, 31, 12, 22, 32',
          'C. 12, 22, 32, 12, 22, 32',
          'D. 10, 20, 30, 10, 20, 30'
        ],
        answer: 'A',
        explanation: '数组元素修改'
      },
      {
        id: 45,
        title: 'Question 45',
        content: `Given:\n\nimport java. utiLArrayList;\nimport java. utiLList;\n\npublic class Whizlabs{\n    public static void main(String[] args){\n        List<int> list=new ArrayList<>();\n        list.add(21); list.add(13);\n        List.add(30); list.add(11);\n        list. removeIf(e->e%2!=0);\n        System. out. println(list);\n    }\n}\n\nWhat is the output?`,
        options: [
          'A. [21, 13, 11]',
          'B. [30]',
          'C. []',
          'D. Compilation fails due to error at line 7',
          'E. Compilation tails due to error at line 10'
        ],
        answer: 'D',
        explanation: '集合不能使用基本类型'
      },
      {
        id: 46,
        title: 'Question 46',
        content: `Given:\n\nclass CD {\n    int r;\n    CD(int r) {\n        this.r=r;\n    }\n}\n\nclass DVD extends CD {\n    int c;\n    DVD(int r, int c) {\n        // line n1\n    }\n}\n\nAnd given the code fragment:\n\nDVD dvd = new DVD(10,20);\n\nWhich code fragment should you use at line n1 to instantiate the dvd object successfully?`,
        options: [
          'A)super.r=r;\nthis.c=c;',
          'B)super(r);\nthis(c);',
          'C)super(r);\nthis.c=c;',
          'D)this.c=r;\nsuper(c);'
        ],
        answer: 'C',
        explanation: '正确调用父类构造函数'
      },
      {
        id: 47,
        title: 'Question 47',
        content: `Given the following classes:\n\npublic class Employee {\n    public int salary ;\n}\n\npublic class Manager extends Employee {\n    public int budget ;\n}\n\npublic class Director extends Manager {\n    public int stockOptions ;\n}\n\nAnd given the following main method:\n\npublic static void main (String[] args) {\n    Employee employee = new Employee ();\n    Manager manage r = new Manager ();\n    Director director = new Director (); //line n1\n}\n\nWhich two options fail to compile when placed at line n1 of the main method?`,
        options: [
          'A. employee.salary = 50_000;',
          'B. director.salary = 80_000;',
          'C. employee.budget = 200_000;',
          'D. manager.budget = 1_000_000;',
          'E. manager.stockOption = 500;',
          'F. director.stockOptions = 1_000;'
        ],
        answer: 'C,E',
        explanation: '父类引用不能访问子类特有成员'
      },
      {
        id: 48,
        title: 'Question 48',
        content: `Given the code fragment:\n\npublic static void main (string[] args){\n    short s1 = 200;\n    Integer s2 =4O0;\n    Long s3=(long) s1 + s2; //line n1\n    String s4 =(string) (s3*s2);// line n2\n    System. out. println ("Sum is " +s4);\n}\n\nWhat is the result?`,
        options: [
          'A. Sum is 600',
          'B. Compilation fails at line n1.',
          'C. Compilation fails at line n2.',
          'D. A ClassCastException is thrown at line n1.',
          'E. A ClassCastException is thrown at line n2.'
        ],
        answer: 'C',
        explanation: 'String不能直接强制转换'
      },
      {
        id: 49,
        title: 'Question 49',
        content: `Which two are valid array declaration?`,
        options: [
          'A. Object array[];',
          'B. Boolean array[3];',
          'C. int[] array;',
          'D. Float[2] array;'
        ],
        answer: 'A,C',
        explanation: '有效的数组声明方式'
      },
      {
        id: 50,
        title: 'Question 50',
        content: `Given the code fragment from three files:\n\nSalesMan sales;\n\npublic class SalesMan{ }\n\nProduct.java;\n\npackage sales.products;\n\npublic class Product { }\n\nMarket.java:\n\n1. package market;\n2.//insert code here\n3. public class USMarket {\n4. SalesMan sm;\n5. Product p;\n6.}\n\nWhich code fragment, when inserted at line 2, enables the code to compile?`,
        options: [
          'A)import sales.*;',
          'B)import java.sales.products.*;',
          'C)import sales;\nimport sales.products;',
          'D)import sales.*;\nimport products.*;',
          'E)import sales.*;\nimport sales.products.*;'
        ],
        answer: 'E',
        explanation: '正确的包导入方式'
      },
      {
        id: 51,
        title: 'Question 51',
        content: `Given:\n\nclass Mid {\n    public int findMid(int n1, int n2) {\n        return (n1 + n2) / 2;\n    }\n}\n\npublic class Calc extends Mid {\n    public static void main(String[] args) {\n        int n1 = 22, n2 = 2;\n        // insert code here\n        System.out.print(n3);\n    }\n}\n\nWhich two code fragments, when inserted at // insert code here, enable the code to compile and print 12?`,
        options: [
          'A. Calc c = new Calc();\nint n3 = c.findMid(n1,n2);',
          'B. int n3 = super.findMid(n1,n3);',
          'C. Calc c = new Mid();\nint n3 = c.findMid(n1, n2);',
          'D. Mid m1 = new Calc();\nint n3 = m1.findMid(n1, n2);',
          'E. int n3 = Calc.findMid(n1, n2);'
        ],
        answer: 'A,D',
        explanation: '两种正确调用父类方法的方式'
      },
      {
        id: 52,
        title: 'Question 52',
        content: `Given the code fragment:\n\nLocalDate date1 = LocalDate.now();\nLocalDate date2 = LocalDate.of(2014,6,20);\nLocalDate date3 = LocalDate.parse("2014-06-20",DateTimeFormatter.ISO_DATE);\nSystem.out.println("date1 = "+date1);\nSystem.out.println("date2 = "+date2);\nSystem.out.println("date3 = "+date3);\n\nAssume that the system date is June 20, 2014. What is the result?`,
        options: [
          'A. date1 = 2014-06-20\ndate2 = 2014-06-20\ndate3 = 2014-06-20',
          'B. date1 = 6/20/14\ndate2 = 2014-06-20\ndate3 = Jun 20, 2014',
          'C. date1 = 2014-06-20\ndate2 = 2014-06-20\ndate3 = 6/20/14',
          'D. date1 = Jun 20, 2014\ndate2 = 2014-06-20\ndate3 = 2014-06-20'
        ],
        answer: 'A',
        explanation: '三种方式创建的日期相同'
      },
      {
        id: 53,
        title: 'Question 53',
        content: `Given:\n\nclass Alpha{\n    int ns;\n    static int s;\n    Alpha(int ns){\n        if(s<ns){\n            s=ns;\n            this.ns=ns;\n        }\n    }\n    void doPrint(){\n        System.out.println("ns="+ns+"s="+s);\n    }\n}\npublic class TestA{\n    public static void main(String[] args){\n        Alpha ref1=new Alpha(50);\n        Alpha ref2=new Alpha(125);\n        Alpha ref3=new Alpha(100);\n        ref1.doPrint();\n        ref2.doPrint();\n        ref3.doPrint();\n    }\n}\n\nwhat is this result?`,
        options: [
          'A. ns=50 s=125\nns=125 s=125\nns=100 s=125',
          'B. ns=50 s=125\nns=125 s=125\nns=0 s=125',
          'C. ns=50 s=125\nns=125 s=125\nns=100 s=100',
          'D. ns=50 s=125\nns=125 s=125\nns=0 s=125'
        ],
        answer: 'B',
        explanation: '静态变量s被所有实例共享'
      },
      {
        id: 54,
        title: 'Question 54',
        content: `Which two are java Exception classes?`,
        options: [
          'A. SercurityException',
          'B. DuplicatePathException',
          'C. IllegalArgumentException',
          'D. TooManyArgumentsException'
        ],
        answer: 'A,C',
        explanation: '没有B D这两个异常'
      },
      {
        id: 55,
        title: 'Question 55',
        content: `public static void main(String[] args) {\n    String [][] arr= {{\"A\",\"B\",\"C\"},{\"D\",\"E\"}};\n    for(int i=0;i<arr.length;i++) {\n        for(int j=0;j<arr[i].length;j++) {\n            System.out.println(arr[i][j])+\" \");\n            if(arr[i][j].equals(\"B\")){\n                break;\n            }\n        }\n        continue;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. A B C',
          'B. A B C D E',
          'C. A B D E',
          'D. Complilaton fails.'
        ],
        answer: 'D',
        explanation: '编译错误'
      },
      {
        id: 56,
        title: 'Question 56',
        content: `Given:\n\npublic class FieldInit{\n    char c;\n    boolean b;\n    float f;\n    void printAll(){\n        System.out.println("c="+c);\n        System.out.println("c="+b);\n        System.out.println("c="+f);\n    }\n    public static void main(String[] args){\n        FieldInit f=new FieldInit();\n        f.printAll();\n    }\n}`,
        options: [
          'A. c=null\nb=false\nf=0.0F',
          'B. c=0\nb=false\nf=0.0f',
          'C. c=null\nb=true\nf=0.0',
          'D. c=\nb=false\nf=0.0'
        ],
        answer: 'D',
        explanation: '基本类型默认值'
      },
      {
        id: 57,
        title: 'Question 57',
        content: `Given:\n\nString color = "teal";\nswich (color) {\n    case "Red":\n        System.out.println("Found Red");\n    case "Blue":\n        System.out.println("Found Blue");\n    case "Teal":\n        System.out.println("Found Teal");\n        break;\n    default:\n        System.out.println("Found Default"):\n}\n\nWhat is the result?`,
        options: [
          'A. Found Red\nFound Default',
          'B. Found Teal',
          'C. Found Red\nFound Blue\nFound Teal',
          'D. Found Red\nFound Blue\nFound Teal\nFound Default',
          'E. Found Default'
        ],
        answer: 'E',
        explanation: '没有匹配的case执行default'
      },
      {
        id: 58,
        title: 'Question 58',
        content: `Given the code in a file Traveler.java:\n\nclass Tour{\n    public static void main (String[] args){\n        System.out.println("Happy Journey!" + args[1]);\n    }\n}\n\npublic class Traveler{\n    public static void main (String[] args) {\n        Tours.main(args);\n    }\n}\n\nAnd the commands:\n\nJavac Traveler.java\nJava Traveler Java Duke\n\nWhat is the result?`,
        options: [
          'A. Happy Journey! Duke',
          'B. Happy Journey! Java',
          'C. An exception is thrown at runtime',
          'D. The program fails to execute due to a runtime error'
        ],
        answer: 'A',
        explanation: '传入参数Duke作为args[1]'
      },
      {
        id: 59,
        title: 'Question 59',
        content: `Given:\n\n1.import java.util.ArrayList;\n2.import java.util.List;\n3.\n4.public class Whizlabs{\n5.\n6.public static void main(String[] args){\n7.List<Integer> list= new ArrayList<>();\n8.list.add(21);list.add(13);\n9.list.add(30);list.add(11);\n10.list.add(2);\n11//insert here\n12.System.out.ptintln(list);\n13.}\n14.}\n\nWhich inserted at line 11, will provide the following output?\n[21, 13, 11]`,
        options: [
          'A. list.removelf(e > e%2 != 0);',
          'B. list.removelf(e -> e%2 != 0);',
          'C. Ust.removelf(e -> e%2 == 0);',
          'D. list.remove(e -> e%2 == 0);',
          'E. None of the above.'
        ],
        answer: 'C',
        explanation: '使用removeIf移除偶数'
      },
      {
        id: 60,
        title: 'Question 60',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    ArrayList<String> List = new ArrayList<>();\n    List.add("SE");\n    List.add("EE");\n    List.add("ME");\n    List.add("SE");\n    List.add("EE");\n    List.remove("SE");\n    System.out.println("Values are :" + List);\n}\n\nWhat is the result?`,
        options: [
          'A. Values are : [EE, ME]',
          'B. Values are : [EE, EE, ME]',
          'C. Values are : [EE, ME, EE]',
          'D. Values are : [SE, EE, ME, EE]',
          'E. Values are : [EE, ME, SE, EE]'
        ],
        answer: 'C',
        explanation: 'remove只移除第一个匹配项'
      },
      {
        id: 61,
        title: 'Question 61',
        content: `Given:\n\nclass Vehicle {\n    String type = "4w";\n    int maxSpeed = 100;\n    Vehicle(String type ,int maxSpeed){\n        this.type = type ;\n        this.maxSpeed = maxSpeed;\n    }\n}\n\nclass Car extends Vehicle {\n    String trans ;\n    Car (String trans){ // line n1\n        this.trans = trans ;\n    }\n    Car(String type,int maxSpeed,String trans){\n        super(type,maxSpeed);\n        this(trans); //line n2\n    }\n}\n\nAnd given the code fragment:\n\nCar c1 = new Car ("Auto");\nCar c2 = new Car("4w",150,"Manual");\nSystem.out.println(c1.type+" "+ c1.maxSpeed + " " + c1.trans);\nSystem.out.println(c2.type+" "+ c2.maxSpeed +" " + c2.trans);\n\nWhat is the result?`,
        options: [
          'A. 4W 100 Auto\n4W 150 Manual',
          'B. Null 0 Auto\n4W 150 Manual',
          'C. Compilation fails only at line n1',
          'D. Compilation fails only at line n2',
          'E. Compilation fails at both line n1 and line n2'
        ],
        answer: 'E',
        explanation: '两处构造函数错误'
      },
      {
        id: 62,
        title: 'Question 62',
        content: `Given the code fragment:\n\npublic static void main (String[] args){\n    // line n1\n    switch(x){\n        case 1;\n            System.out.println("One");\n            break;\n        case 2;\n            System.out.println("Two");\n            break;\n    }\n}\n\nWhich three code fragments can be independently inserted at line n1 to enable the code to print One?`,
        options: [
          'A. Integer x=new Integer("1");',
          'B. long x=1;',
          'C. byte x=1;',
          'D. short x=1;',
          'E. double x=1;',
          'F. String x="1";'
        ],
        answer: 'A,C,D',
        explanation: 'switch支持的类型'
      },
      {
        id: 63,
        title: 'Question 63',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    String ta = "A ";\n    ta = ta.concat("B ");\n    String tb = "C ";\n    ta = ta.concat(tb);\n    ta.replace('C','D');\n    ta = ta.concat(tb);\n    System.out.println(ta);\n}\n\nWhat is the result?`,
        options: [
          'A. A B D C',
          'B. A B C C',
          'C. A B C D',
          'D. A C D',
          'E. A B C'
        ],
        answer: 'B',
        explanation: '字符串不可变性'
      },
      {
        id: 64,
        title: 'Question 64',
        content: `Given:\n\npublic class TestField {\n    public static void main(String[] args) {\n        int var1 = 200;\n        System.out.println(doCalc(var1));\n        System.out.println(" "+var1);\n    }\n    static int doCalc(int var1){\n        var1 = var1*2;\n        return var1;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 400 200',
          'B. 200 200',
          'C. 400 400',
          'D. Compilation fails'
        ],
        answer: 'A',
        explanation: '基本类型参数传递'
      },
      {
        id: 65,
        title: 'Question 65',
        content: `Given:\n\npublic class StringReplace{\n    public static void main(String[] args) {\n        String message = "Hi everyone!";\n        System.out.println("message = "+message.replace("e","X"));\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. message = Hi everyone!',
          'B. message = Hi XvXryonX!',
          'C. A compile time error is produced',
          'D. A runtime error is produced',
          'E. message =',
          'F. message = Hi Xveryone!'
        ],
        answer: 'B',
        explanation: '替换所有e字符'
      },
      {
        id: 66,
        title: 'Question 66',
        content: `Which two are benefits of polymorphism?`,
        options: [
          'A. Faster code at runtime',
          'B. More efficient code at runtime',
          'C. More dynamic code at runtime',
          'D. More flexible and reusable code',
          'E. Code that is protected from extension by other classes'
        ],
        answer: 'C,D',
        explanation: '多态的好处'
      },
      {
        id: 67,
        title: 'Question 67',
        content: `Given:\n\npublic class Series{\n    static boolean flag;\n    public void displaySeries(){\n        int num =2;\n        while(flag){\n            if(num % 7 == 0)\n                flag = false;\n            System.out.println(num);\n            num +=2;\n        }\n    }\n    public static void main(String[] args) {\n        new Series().displaySeries();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 2 4 6 8 10 12',
          'B. 2 4 6 8 10 12 14',
          'C. Compilation fails',
          'D. The program prints multiple of 2 infinite times',
          'E. The program prints nothing'
        ],
        answer: 'E',
        explanation: 'flag初始为false不执行循环'
      },
      {
        id: 68,
        title: 'Question 68',
        content: `Given:\n\npublic class Test{\n    public static void main(String[] args){\n        Integer num = Integer.parseInt(args[1]);\n        System.out.println("Number is : " + num);\n    }\n}\n\nAnd the commands:\n\nJavac Test.java\nJava Test 12345\n\nWhat is the result?`,
        options: [
          'A: Number is:12345',
          'B: A NullPointerException is thrown at runtime',
          'C: A NumberFormatException is thrown at runtime',
          'D: AnArrayIndexOutOfBoundException is thrown at runtime.'
        ],
        answer: 'D',
        explanation: '缺少第二个参数'
      },
      {
        id: 69,
        title: 'Question 69',
        content: `Given the following code for a Planet object:\n\npublic class Planet {\n    public String name;\n    public int moons;\n    public Planet (String name,int moons){\n        this.name = name;\n        this.moons = moons;\n    }\n}\n\nAnd the following main method:\n\npublic static void main{String[] args}{\n    Planet[] planets ={\n        new Planet("Mercury",0),\n        new Planet("Venus",0),\n        new Planet("Earth",1),\n        new Planet("Mars",2)\n    };\n    System.out.println(planets);\n    System.out.println(planets[2]);\n    System.out.println(planets[2].moons);\n}\n\nwhat is the output?`,
        options: [
          'A) [LPlanets.Planet;@15db9742\nPlanets.Planet;@6d06d69c\n1',
          'B) planets\nEarth\n1',
          'C) [LPlanets.Planet;@15db9742\nEarth\n1',
          'D) [LPlanets.Planet;@15db9742\nPlanets.Planet;@6d06d69c\n[LPlanets.Moon;@7852e922',
          'E) [LPlanets.Planet;@15db9742\nVenus\n0'
        ],
        answer: 'A',
        explanation: '数组和对象默认toString输出'
      },
      {
        id: 70,
        title: 'Question 70',
        content: `Given:\n\nclass Patient{\n    String name;\n    public Patient(String name){\n        this.name = name;\n    }\n}\n\npublic class Test15 {\n    public static void main(String[] args) {\n        List ps = new ArrayList();\n        Patient p2 = new Patient("Mike");\n        ps.add(p2);\n        if(f>=0){\n            System.out.println("Mike Found");\n        }\n    }\n}\n\nWhich code fragment, when inserted at line 14, enables the code to print Mike Found?`,
        options: [
          'A. int f = ps.indexOf {new patient ("Mike")};',
          'B. int f = ps.indexOf (patient("Mike"));',
          'C. patient p = new Patient ("Mike"); int f = pas.indexOf(P)',
          'D. int f = ps.indexOf(p2);'
        ],
        answer: 'D',
        explanation: '正确查找对象索引'
      },
      {
        id: 71,
        title: 'Question 71',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) {\n        try {\n            String[] arr =new String[4];\n            arr[1] = "Unix";\n            arr[2] = "Linux";\n            arr[3] = "Solarios";\n            for (String var : arr) {\n                System.out.print(var + " ");\n            }\n        } catch(Exception e) {\n            System.out.print (e.getClass());\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Unix Linux Solaris',
          'B. Null Unix Linux Solaris',
          'C. Class java.lang.Exception',
          'D. Class java.lang.NullPointerException'
        ],
        answer: 'B',
        explanation: 'arr[0]未初始化'
      },
      {
        id: 72,
        title: 'Question 72',
        content: `Given:\n\nclass SpecialException extends Exception{\n    public SpecialException(String message){\n        super(message);\n        System.out.println(message);\n    }\n}\n\npublic class ExceotionTest {\n    public static void main(String[] args) {\n        try {\n            doSomething();\n        }\n        catch (SpecialExceptions e){\n            System.out.println(e);\n        }\n    }\n    static void doSomething() throws SpecialException{\n        int[] ages = new int[4];\n        ages[4] = 17;\n        doSomethingElse();\n    }\n    static void doSomethingElse() throws SpecialException {\n        throw new SpecialException("Thrown at the end of doSomething method");\n    }\n}\n\nWhat will be the output?`,
        options: [
          'A) SpecialException: Thrown at end of doSometing() method',
          'B) Error in thread "main" java.lang.ArrayIndexOutOfBoundsError;',
          'C) Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException:4\nat ExceptionTest.doSomething(ExceptionTest.java:13)\nat ExceptionTest.main(ExcetionTest.java:4)',
          'D) SpecialException: Thrown at end of doSomething() method\nat ExceptionTest.doSomethingElse(ExceptionTest.java:16)\nat ExceptionTest.doSomething(ExceptionTest.java:13)\nat ExceptionTest.main(ExceptionTest.java:4)'
        ],
        answer: 'C',
        explanation: '数组越界异常'
      },
      {
        id: 73,
        title: 'Question 73',
        content: `Given:\n\npublic class TestOperator {\n    public static void main(String[] args) {\n        int result = 30 -12 / (2*5)+1;\n        System.out.print("Result = " + result);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Result = 2',
          'B. Result = 3',
          'C. Result = 28',
          'D. Result = 29',
          'E. Result = 30'
        ],
        answer: 'E',
        explanation: '运算符优先级'
      },
      {
        id: 74,
        title: 'Question 74',
        content: `Given the code fragment:\n\nint b = 3;\nif ( !(b > 3)) {\n    System.out.println("square ");\n}{\n    System.out.println("circle ");\n}\nSystem.out.println("...");\n\nWhat is the result?`,
        options: [
          'A. square ...',
          'B. circle ...',
          'C. square circle ...',
          'D. Compilation fails.'
        ],
        answer: 'C',
        explanation: 'if语句和代码块执行'
      },
      {
        id: 75,
        title: 'Question 75',
        content: `Given the code fragment:\n\npublic class ForTest {\n    public static void main(String[] args) {\n        int[] array = {1, 2, 3};\n        for ( foo ) {\n        }\n    }\n}\n\nWhich three code fragments, when replaced individually for foo, enables the program to compile?`,
        options: [
          'A. int i : array',
          'B. int i = 0; i < 1;',
          'C. ; ;',
          'D. ; i < 1; i++',
          'E. i = 0; i<1;'
        ],
        answer: 'A,B,C',
        explanation: '有效的for循环语法'
      },
      {
        id: 76,
        title: 'Question 76',
        content: `Which two statements are true for a two-dimensional array of primitive data type?`,
        options: [
          'A. It cannot contain elements of different types.',
          'B. The length of each dimension must be the same.',
          'C. At the declaration time, the number of elements of the array in each dimension must be specified.',
          'D. All methods of the class object may be invoked on the two-dimensional array'
        ],
        answer: 'A,D',
        explanation: '二维数组特性'
      },
      {
        id: 77,
        title: 'Question 77',
        content: `Given:\n\nimport java.util.*;\npublic class Ref {\n    public static void main(String[] args) {\n        StringBuilder s1 = new StringBuilder("Hello Java!");\n        String s2 = s1.toString();\n        List<String> lst = new ArrayList<String>();\n        lst.add(s2);\n        System.out.println(s1.getClass());\n        System.out.println(s2.getClass());\n        System.out.println(lst.getClass());\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. class java.lang.String class java.lang.String class java.util.ArrayList',
          'B. class java.lang.Object class java.lang. Object class java.util.Collection',
          'C. class java.lang.StringBuilder class java.lang.String class java.util.ArrayList',
          'D. class java.lang.StringBuilder class java.lang.String class java.util.List'
        ],
        answer: 'C',
        explanation: '对象类型输出'
      },
      {
        id: 78,
        title: 'Question 78',
        content: `Given the code from the Greeting.Java file:\n\nPublic class Greeting{\n    Public static void main (String [ ] args){\n        System.out.println("Hello"+args[0]);\n    }\n}\n\nWhich set of commands prints Hello Duke in the console?`,
        options: [
          'A) javac Greeting\njava Greeting Duke',
          'B) javac Greeting.java Duke\njava Greeting',
          'C) javac Greeting.java\njava Greeting Duke',
          'D) javac Greeting.java\njava Greeting.class Duke'
        ],
        answer: 'C',
        explanation: '正确编译运行命令'
      },
      {
        id: 79,
        title: 'Question 79',
        content: `Given:\n\npublic class MainMethod {\n    void main() { System.out.println("one"); }\n    static void main(String args) { System.out.println("two"); }\n    public static void main(String[] args) {\n        System.out.println("three");\n    }\n    void mina(Object[] args) { System.out.println("four"); }\n}\n\nWhat is printed out when the program is excuted?`,
        options: [
          'A. one',
          'B. two',
          'C. three',
          'D. four'
        ],
        answer: 'C',
        explanation: 'main方法签名'
      },
      {
        id: 80,
        title: 'Question 80',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) {\n        int arr[] = new int[4];\n        arr[0] = 1;\n        arr[1] = 2;\n        arr[2] = 4;\n        arr[3] = 5;\n        int sum = 0;\n        try {\n            for (int pos = 0; pos <= 4; pos++) {\n                sum = sum + arr[pos];\n            }\n        } catch (Exception e) {\n            System.out.println("Invalid index");\n        }\n        System.out.println(sum);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 12',
          'B. Invalid Index 12',
          'C. Invalid Index',
          'D. Compilation fails'
        ],
        answer: 'B',
        explanation: '数组越界异常'
      },
      {
        id: 81,
        title: 'Question 81',
        content: `Given the code fragment:\n\nclass Student{\n    String name;\n    Int age;\n}\n\nAnd,\n1. public class TestP{\n2. public static void main(String[] args){\n3. Student s1=new student();\n4. Student s2=new student ();\n5. Student s3=new student ();\n6. S1=s3;\n7. S3=s2;\n8. S2=null;\n9. }\n10. }\n\nWhich statement is true?`,
        options: [
          'A. After line 8, three objects are eligible for garbage collection',
          'B. After line 8, two objects are eligible for garbage collection',
          'C. After line 8, one object is eligible for garbage collection',
          'D. After line 8, none of the objects are eligible for garbage collection'
        ],
        answer: 'C',
        explanation: '只有s2引用的对象被置为null'
      },
      {
        id: 82,
        title: 'Question 82',
        content: `Given:\n\npublic class Test {\n    static boolean bVar;\n    public static void main(String[] args) {\n        boolean bVar1 = true; \n        int count =8;\n        do {\n            System.out.println("Hello Java! " +count); \n            if (count >= 7) {\n                bVar1 = false;\n            }\n        } while (bVar != bVar1 && count > 4); \n        count -= 2;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Hello Java! 8 Hello Java! 6 Hello Java! 4',
          'B. Hello Java! 8 Hello Java! 6',
          'C. Hello Java! 8',
          'D. Compilation fails'
        ],
        answer: 'C',
        explanation: '循环只执行一次'
      },
      {
        id: 83,
        title: 'Question 83',
        content: `Given:\n\npublic class Test2{\n    public static void main(String[] args){\n        int ar1[] = {2,4,6,8};\n        int ar2[] = {1,3,5,7,9};\n        ar2 = ar1;\n        for(int e2 : ar2){\n            System.out.print(" " + e2);\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 2 4 6 8',
          'B. 2 4 6 8 9',
          'C. 1 3 5 7',
          'D. 1 3 5 7 9'
        ],
        answer: 'A',
        explanation: '数组引用赋值'
      },
      {
        id: 84,
        title: 'Question 84',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    boolean opt = true;\n    switch (opt) {\n        case true;\n            System.out.print("True");\n            break;\n        default:\n            System.out.print("***");\n    }\n    System.out.println("Done");\n}\n\nWhich modification enables the code fragment to print TrueDone?`,
        options: [
          'A. Replace line 5 With String result = "true"; Replace line 7 with case "true":',
          'B. Replace line 5 with boolean opt = 1; Replace line 7 with case 1=',
          'C. At line 9, remove the break statement.',
          'D. Remove the default section.'
        ],
        answer: 'A',
        explanation: 'switch不支持boolean类型'
      },
      {
        id: 85,
        title: 'Question 85',
        content: `Given the code fragment:\n\nList colors = new ArrayList(); \ncolors.add("green");\ncolors.add("red");\ncolors.add("blue"); \ncolors.add("yellow"); \ncolors.remove(2);\ncolors.add(3,"cyan"); \nSystem.out.print(colors);\n\nWhat is the result?`,
        options: [
          'A. [green, red, yellow, cyan]',
          'B. [green, blue, yellow, cyan]',
          'C. [green, red, cyan, yellow]',
          'D. Am IndexOutOfBoundsException is thrown at runtime'
        ],
        answer: 'A',
        explanation: '列表操作后的结果'
      },
      {
        id: 86,
        title: 'Question 86',
        content: `Given the following four Java file definitions:\n\n// Foo.java\npackage facades;\npublic interface Foo { }\n\n// Boo.java\npackage facades;\npublic interface Boo extends Foo { }\n\n// Woofy.java\npackage org.domain\n// line n1\npublic class Woofy implements Boo, Foo { }\n\n// Test.java\npackage.org; \npublic class Test {\n    public static void main(String[] args) { \n        Foo obj=new Woofy();\n    }\n}\n\nWhich set modifications enable the code to compile and run?`,
        options: [
          'A. At line n1, Insert: import facades;At line n2, insert:import facades;import org.domain;',
          'B. At line n1, Insert: import facades.*;At line n2, insert:import facades;import org.*;',
          'C. At line n1, Insert: import facades.*;At line n2, insert:import facades.Boo;import org.*;',
          'D. At line n1, Insert: import facades.Foo, Boo;At line n2, insert:import org.domain.Woofy;',
          'E. At line n1, Insert: import facades.*;At line n2, insert:import facades;import org.domain.Woofy;'
        ],
        answer: 'E',
        explanation: '正确的包导入方式'
      },
      {
        id: 87,
        title: 'Question 87',
        content: `Given the code fragment:\n\nStringBuilder sb = new StringBuilder ( ) ;\nSb.append ("world");\n\nWhich code fragment prints Hello World?`,
        options: [
          'sb.insert(0,"Hello "); System.out.println(sb);',
          'sb.append(0,"Hello "); System.out.println(sb);',
          'sb.add(0,"Hello "); System.out.println(sb);',
          'sb.set(0,"Hello "); System.out.println(sb);'
        ],
        answer: 'A',
        explanation: '正确使用StringBuilder插入字符串'
      },
      {
        id: 88,
        title: 'Question 88',
        content: `Given the fragments:\n\npublic class TestA extends Root {\n    public static void main(String[] args) {\n        Root r = new TestA();\n        System.out.println(r.method1()); // line n1\n        System.out.println(r.method2()); // line n2\n    }\n}\n\nclass Root {\n    private static final int MAX = 20000;\n    private int method1() {\n        int a = 100 + MAX;\n        return a;\n    }\n    protected int method() {\n        int a = 200 + MAX;\n        return a;\n    }\n}\n\nWhich line causes a compilation error?`,
        options: [
          'A. Line n1',
          'B. Line n2',
          'C. Line n3',
          'D. Line n4'
        ],
        answer: 'A',
        explanation: '私有方法不可访问'
      },
      {
        id: 89,
        title: 'Question 89',
        content: `Given:\n\npublic static void main (String[] args) {\n    String[][] chs = new String[2][];\n    chs[0] = new String[2];\n    chs[1] = new String[5];\n    int i = 97;\n    for (int a=0;a<chs.length;a++) {\n        for(int b=0; b<chs.length;b++) {\n            chs[a][b] = "" + i;\n            i++;\n        }\n    }\n    for(String[] ca : chs) {\n        for(String c : ca) {\n            System.out.println(c + " ");\n        }\n        System.out.println();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 97 98\n99 100 null null null',
          'B. 91 98\n99 100 101 102 103',
          'C. Compilation rails.',
          'D. A NullPointerException is thrown at runtime.',
          'E. An ArraylndexOutOfBoundsException is thrown at runtime.'
        ],
        answer: 'A',
        explanation: '不规则二维数组初始化'
      },
      {
        id: 90,
        title: 'Question 90',
        content: `Given the code fragment:\n\npublic class Test{\n    void readCard (int cardNo)throws Exception{\n        System.out.println("Reading Card");\n    }\n    void checkCard(int cardNo) throws RuntimeException{//line n1\n        System.out.println("Checking Card");\n    }\n    public static void main(String[] args) {\n        Test ex=new Test();\n        int cardNo=12344;\n        ex.checkCard(cardNo); //line n2\n        ex.readCard(cardNo); //line n3\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Reading Card Checking Card',
          'B. Compilation fails only at line n1.',
          'C. Compilation fails only at line n2.',
          'D. Compilation fails only at line n3.',
          'E. Compilation fails at both line n2 and line n3.'
        ],
        answer: 'D',
        explanation: '未处理检查异常'
      },
      {
        id: 91,
        title: 'Question 91',
        content: `Given:\n\npublic class ScopeTest {\n    int j, int k;\n    public static void main(String[] args) { \n        new ScopeTest().doStuff(); \n    }\n    void doStuff() {\n        int x = 5;\n        doStuff2();\n        System.out.println("x");\n    }\n    void doStuff2() {\n        int y = 7;\n        System.out.println("y");\n        for (int z = 0; z < 5; z++) {\n            System.out.println("z");\n            System.out.println("y");\n        }\n    }\n}\n\nWhich two items are fields?`,
        options: [
          'A. j',
          'B. k',
          'C. x',
          'D. y',
          'E. z'
        ],
        answer: 'A,B',
        explanation: '类成员变量'
      },
      {
        id: 92,
        title: 'Question 92',
        content: `Given the code fragment\n\nclass Test2{\n    int fvat;\n    static int cvar;\n    public static void main(String[] args) {\n        Test2 t=new Test2();\n        //insert code here to write fieldvariables\n    }\n}\n\nWhich code fragments, inserted independently, enable the code compile?`,
        options: [
          'A. t.fvar = 200;',
          'B. cvar = 400;',
          'C. fvar = 200; cvar = 400;',
          'D. this.fvar = 200; this.cvar = 400;',
          'E. t.fvar = 200; Test2.cvar = 400;',
          'F. this.fvar = 200; Test2.cvar = 400;'
        ],
        answer: 'B',
        explanation: '静态变量访问方式'
      },
      {
        id: 93,
        title: 'Question 93',
        content: `Given the code fragment:\n\npublic static void dispResult(int [] num) {\n    try {\n        System.out.println(num[1]/(num[1]-num[2]));\n    }catch (ArithmeticException e) {\n        System.out.println("first exception");\n    }\n    System.out.println("Done");\n}\npublic static void main(String[] args) {\n    try {\n        int[] arr= {100,100};\n        dispResult(arr);\n    }catch (IllegalArgumentException e) {\n        System.err.println("second exception");\n    }catch (Exception e) {\n        System.err.println("third exception");\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 0 Done',
          'B. First Exception Done',
          'C. Second Exception',
          'D. Done Third Exception',
          'E. Third Exception'
        ],
        answer: 'E',
        explanation: '数组越界异常'
      },
      {
        id: 94,
        title: 'Question 94',
        content: `Given:\n\nabstract class A1 {\n    public abstract void m1();\n    public void m2() { System.out.println("Green"); }\n}\n\nabstract class A2 extends A1 {\n    public abstract void m3();\n    public void m1() { System.out.println("Cyan"); }\n    public void m2() { System.out.println("Blue"); }\n}\n\npublic class A3 extends A2 {\n    public void m1() { System.out.println("Yellow"); }\n    public void m2() { System.out.println("Pink"); }\n    public void m3() { System.out.println("Red"); }\n    public static void main(String[] args) {\n        A2 tp = new A3();\n        tp.m1();\n        tp.m2();\n        tp.m3();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Yellow Pink Red',
          'B. Cyan Blue Red',
          'C. Cyan Green Red',
          'D. Compilation Fails'
        ],
        answer: 'A',
        explanation: '多态方法调用'
      },
      {
        id: 95,
        title: 'Question 95',
        content: `Given:\n\nclass A {\n    public A(){\n        System.out.print("A ");\n    }\n}\n\nclass B extends A{\n    public B(){ //line n1\n        System.out.print("B ");\n    }\n}\n\nclass C extends B{\n    public C(){ //line n2\n        System.out.print("C ");\n    }\n    public static void main(String[] args){\n        C c = new C();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. C B A',
          'B. C',
          'C. A B C',
          'D. Compilation fails at line n1 and line n2'
        ],
        answer: 'C',
        explanation: '构造函数调用顺序'
      },
      {
        id: 96,
        title: 'Question 96',
        content: `Given the code fragment:\n\nString shirts[][] = new String[2][2];\nshirts[0][0] = "red";\nshirts[0][1] = "blue";\nshirts[1][0] = "small";\nshirts[1][1] = "medium";\n\nWhich code fragment prints red: blue: small: medium?`,
        options: [
          'A) for (int index = 1; index < 2; index++) {\n    for (int idx = 1; idx < 2; idx++) {\n        System.out.print(shirts[index][idx] + ":");\n    }\n}',
          'B) for (int index = 0; index < 2; index++) {\n    for (int idx = 0; idx < index; ++idx) {\n        System.out.print(shirts[index][idx] + ":");\n    }\n}',
          'C) for (String c : color) {\n    for (String s : sizes) {\n        System.out.print(s + ":");\n    }\n}',
          'D) for (int index = 0; index < 2;) {\n    for (int idx = 0; idx < 2;) {\n        System.out.print(shirts[index][idx] + ":");\n        idx++;\n    }\n    index++;\n}'
        ],
        answer: 'D',
        explanation: '正确遍历二维数组'
      },
      {
        id: 97,
        title: 'Question 97',
        content: `Given:\n\npublic class Product {\n    int id;\n    String name;\n    public Product(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n\nAnd given the code fragment:\n4.Product p1 = new Product(101, "pen");\n5.Product p2 = new Product(101, "pen");\n6.Product p3 = p1;\n7.boolean ans1 = p1 == p2;\n8.boolean ans2 = p1.name.equals(p2.name);\n9.System.out.print(ans1 + ":" + ans2);\n\nWhat is the result?`,
        options: [
          'A. true:true',
          'B. true:false',
          'C. false:true',
          'D. false:false'
        ],
        answer: 'C',
        explanation: '引用比较和字符串比较'
      },
      {
        id: 98,
        title: 'Question 98',
        content: `Given:\n\npublic class MyFor1{\n    public static void main(String[] args){\n        int [] x ={6,7,8};\n        for(int i : x ){\n            System.out.print(i+" ");\n            i++;\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 6 7 8',
          'B. 7 8 9',
          'C. 0 1 2',
          'D. 6 8 10',
          'E. Compilation fails'
        ],
        answer: 'A',
        explanation: '增强for循环中的i是局部变量'
      },
      {
        id: 99,
        title: 'Question 99',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) {\n        int ax = 10, az = 30;\n        int aw = 1, ay = 1;\n        try {\n            aw = ax % 2;\n            ay = az / aw;\n        } catch (ArithmeticException e1) {\n            System.out.println("Invalid Divisor");\n        } catch (Exception e2) {\n            aw = 1;\n            System.out.println("Divisor Changed");\n        }\n        ay = az /aw; // Line 14\n        System.out.println("Succesful Division " + ay);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Invalid Divisor Divisor Changed Successful Division 30',
          'B. Invalid Divisor Successful Division 30',
          'C. Invalid Divisor\nException in thread "main" java.lang.ArithmeticException: / by zero at test.Teagle.main(Teagle.java:14)',
          'D. Invalid Divisor\nException in thread "main" java.lang.ArithmeticException: / by zero at test.Teagle.main(Teagle.java:14)\nSuccessful Division 1'
        ],
        answer: 'C',
        explanation: '除零异常'
      },
      {
        id: 100,
        title: 'Question 100',
        content: `Given the code fragment:\n\n7.StringBuilder sb1 = new StringBuilder("Duke");\n8.string str1 =sb1.toString();\n9. //insert code here\n10. system.out.print (str1 == str2);\n\nWhich code fragment, when inserted at line 9, enables the code to print true?`,
        options: [
          'String str2 = str1;',
          'String str2 = new String (str1);',
          'String str2 = sb1. toString ();',
          'String str2 = "Duke";'
        ],
        answer: 'A',
        explanation: '字符串引用比较'
      },
      {
        id: 100,
        title: 'Question 100',
        content: `Given the code fragment:\n\n7.StringBuilder sb1 = new StringBuilder("Duke");\n8.string str1 =sb1.toString();\n9. //insert code here\n10. system.out.print (str1 == str2);\n\nWhich code fragment, when inserted at line 9, enables the code to print true?`,
        options: [
          'String str2 = str1;',
          'String str2 = new String (str1);',
          'String str2 = sb1. toString ();',
          'String str2 = "Duke";'
        ],
        answer: 'A',
        explanation: '字符串引用比较'
      },
      {
        id: 101,
        title: 'Question 101',
        content: `Given:\n\npublic class App{\n    public static void main (String [] args) {\n        Boolean [] bool = new Boolean [2];\n        bool[0] = new Boolean(Boolean.parseBoolean("true"));\n        bool[1] = new Boolean(null);\n        System .out. println(bool[0] + " " +bool[1]);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. True false',
          'B. True null',
          'C. Compilation fails',
          'D. A NullPointerException is thrown at runtime'
        ],
        answer: 'A',
        explanation: 'Boolean包装类特性'
      },
      {
        id: 102,
        title: 'Question 102',
        content: `Given:\n\npublic class Whizlabs{\n    public static void main(String[] args){\n        StringBuilder sb = new StringBuilder("1Z0");\n        sb.concat("-808");\n        System.out.println(sb);\n    }\n}\n\nWhat is the output?`,
        options: [
          'A.1Z0',
          'B.1Z0-808',
          'C.An exception will be thrown.',
          'D. Compilation fails due to error at line 3',
          'E. Compilation fails due to error at line 4'
        ],
        answer: 'E',
        explanation: 'StringBuilder没有concat方法'
      },
      {
        id: 103,
        title: 'Question 103',
        content: `Given the code fragment:\n\n9. int a =-10;\n10.int b = 17;\n11.int c = expression1;\n12.int d = expression2;\n13.c++;\n14.d--;\n15.System.out.println(c + "," + d);\n\nWhat could expression1 and expression2 be,respectively,in order to produce output -8?`,
        options: [
          'A.++a,--b',
          'B.++a,b--',
          'C.A++,--b',
          'D.A++,b--'
        ],
        answer: 'B',
        explanation: '前置和后置递增操作的区别'
      },
      {
        id: 104,
        title: 'Question 104',
        content: `Given:\n\nclass X{\n    public void mX(){\n        System.out.println("Xm1");\n    }\n}\n\nclass Y extends X{\n    public void mX(){\n        System.out.println("Xm2");\n    }\n    public coid mY(){\n        System.out.println("Ym");\n    }\n}\n\npublic class Test{\n    public static void main(String[] args){\n        X xref = new Y();\n        Y yref = (Y) xref;\n        yref.mY();\n        xref.mx();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A.Ym\nXm2',
          'B.Ym\nXm1',
          'C.Compilation fails',
          'D.A ClassCastException is thrown at runtime'
        ],
        answer: 'A',
        explanation: '多态方法调用'
      },
      {
        id: 105,
        title: 'Question 105',
        content: `Given:\n\nclass Alpha{\n    int ns;\n    static int s;\n    Alpha(int ns){\n        if(s<ns){\n            s=ns;\n            this.ns=ns;\n        }\n    }\n    void doPrint(){\n        System.out.println("ns="+ns+"s="+s);\n    }\n}\n\npublic class TestA{\n    public static void main(String[] args){\n        Alpha ref1=new Alpha(50);\n        Alpha ref2=new Alpha(125);\n        Alpha ref3=new Alpha(100);\n        ref1.doPrint();\n        ref2.doPrint();\n        ref3.doPrint();\n    }\n}\n\nwhat is this result?`,
        options: [
          'A. ns=50 s=125\nns=125 s=125\nns=100 s=125',
          'B. ns=50 s=125\nns=125 s=125\nns=0 s=125',
          'C. ns=50 s=125\nns=125 s=125\nns=100 s=100',
          'D. ns=50 s=125\nns=125 s=125\nns=0 s=125'
        ],
        answer: 'B',
        explanation: '静态变量与实例变量的区别'
      },
      {
        id: 106,
        title: 'Question 106',
        content: `Which two are java Exception classes?`,
        options: [
          'A. SercurityException',
          'B. DuplicatePathException',
          'C. IllegalArgumentException',
          'D. TooManyArgumentsException'
        ],
        answer: 'A,C',
        explanation: 'Java标准异常类'
      },
      {
        id: 107,
        title: 'Question 107',
        content: `public static void main(String[] args) {\n    String [][] arr= {{\"A\",\"B\",\"C\"},{\"D\",\"E\"}};\n    for(int i=0;i<arr.length;i++) {\n        for(int j=0;j<arr[i].length;j++) {\n            System.out.println(arr[i][j])+\" \");\n            if(arr[i][j].equals(\"B\")){\n                break;\n            }\n        }\n        continue;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. A B C',
          'B. A B C D E',
          'C. A B D E',
          'D. Complilaton fails.'
        ],
        answer: 'D',
        explanation: '语法错误'
      },
      {
        id: 108,
        title: 'Question 108',
        content: `Given:\n\npublic class FieldInit{\n    char c;\n    boolean b;\n    float f;\n    void printAll(){\n        System.out.println(\"c=\"+c);\n        System.out.println(\"c=\"+b);\n        System.out.println(\"c=\"+f);\n    }\n    public static void main(String[] args){\n        FieldInit f=new FieldInit();\n        f.printAll();\n    }\n}`,
        options: [
          'A. c=null\nb=false\nf=0.0F',
          'B. c=0\nb=false\nf=0.0f',
          'C. c=null\nb=true\nf=0.0',
          'D. c=\nb=false\nf=0.0'
        ],
        answer: 'D',
        explanation: '基本类型默认值'
      },
      {
        id: 109,
        title: 'Question 109',
        content: `Given:\n\nString color = \"teal\";\nswich (color) {\n    case \"Red\":\n        System.out.println(\"Found Red\");\n    case \"Blue\":\n        System.out.println(\"Found Blue\");\n    case \"Teal\":\n        System.out.println(\"Found Teal\");\n        break;\n    default:\n        System.out.println(\"Found Default\"):\n}\n\nWhat is the result?`,
        options: [
          'A. Found Red\nFound Default',
          'B. Found Teal',
          'C. Found Red\nFound Blue\nFound Teal',
          'D. Found Red\nFound Blue\nFound Teal\nFound Default',
          'E. Found Default'
        ],
        answer: 'E',
        explanation: 'switch-case执行流程'
      },
      {
        id: 110,
        title: 'Question 110',
        content: `Given the code in a file Traveler.java:\n\nclass Tour{\n    public static void main (String[] args){\n        System.out.println(\"Happy Journey!\" + args[1]);\n    }\n}\n\npublic class Traveler{\n    public static void main (String[] args) {\n        Tours.main(args);\n    }\n}\n\nAnd the commands:\n\nJavac Traveler.java\nJava Traveler Java Duke\n\nWhat is the result?`,
        options: [
          'A. Happy Journey! Duke',
          'B. Happy Journey! Java',
          'C. An exception is thrown at runtime',
          'D. The program fails to execute due to a runtime error'
        ],
        answer: 'A',
        explanation: '命令行参数传递'
      },
      {
        id: 111,
        title: 'Question 111',
        content: `Given:\n\n1.import java.util.ArrayList;\n2.import java.util.List;\n3.\n4.public class Whizlabs{\n5.\n6.public static void main(String[] args){\n7.List<Integer> list= new ArrayList<>();\n8.list.add(21);list.add(13);\n9.list.add(30);list.add(11);\n10.list.add(2);\n11//insert here\n12.System.out.ptintln(list);\n13.}\n14.}\n\nWhich inserted at line 11, will provide the following output?\n[21, 13, 11]`,
        options: [
          'A. list.removelf(e > e%2 != 0);',
          'B. list.removelf(e -> e%2 != 0);',
          'C. Ust.removelf(e -> e%2 == 0);',
          'D. list.remove(e -> e%2 == 0);',
          'E. None of the above.'
        ],
        answer: 'C',
        explanation: '使用removeIf移除偶数'
      },
      {
        id: 112,
        title: 'Question 112',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    ArrayList<String> List = new ArrayList<>();\n    List.add("SE");\n    List.add("EE");\n    List.add("ME");\n    List.add("SE");\n    List.add("EE");\n    List.remove("SE");\n    System.out.println("Values are :" + List);\n}\n\nWhat is the result?`,
        options: [
          'A. Values are : [EE, ME]',
          'B. Values are : [EE, EE, ME]',
          'C. Values are : [EE, ME, EE]',
          'D. Values are : [SE, EE, ME, EE]',
          'E. Values are : [EE, ME, SE, EE]'
        ],
        answer: 'C',
        explanation: 'ArrayList的remove方法'
      },
      {
        id: 113,
        title: 'Question 113',
        content: `Given:\n\nclass Vehicle {\n    String type = "4w";\n    int maxSpeed = 100;\n    Vehicle(String type ,int maxSpeed){\n        this.type = type ;\n        this.maxSpeed = maxSpeed;\n    }\n}\n\nclass Car extends Vehicle {\n    String trans ;\n    Car (String trans){ // line n1\n        this.trans = trans ;\n    }\n    Car(String type,int maxSpeed,String trans){\n        super(type,maxSpeed);\n        this(trans); //line n2\n    }\n}\n\nAnd given the code fragment:\n\nCar c1 = new Car ("Auto");\nCar c2 = new Car("4w",150,"Manual");\nSystem.out.println(c1.type+" "+ c1.maxSpeed + " " + c1.trans);\nSystem.out.println(c2.type+" "+ c2.maxSpeed +" " + c2.trans);\n\nWhat is the result?`,
        options: [
          'A. 4W 100 Auto\n4W 150 Manual',
          'B. Null 0 Auto\n4W 150 Manual',
          'C. Compilation fails only at line n1',
          'D. Compilation fails only at line n2',
          'E. Compilation fails at both line n1 and line n2'
        ],
        answer: 'E',
        explanation: '构造函数调用问题'
      },
      {
        id: 114,
        title: 'Question 114',
        content: `Given the code fragment:\n\npublic static void main (String[] args){\n    // line n1\n    switch(x){\n        case 1;\n            System.out.println("One");\n            break;\n        case 2;\n            System.out.println("Two");\n            break;\n    }\n}\n\nWhich three code fragments can be independently inserted at line n1 to enable the code to print One?`,
        options: [
          'A. Byte x = 1;',
          'B. short x = 1;',
          'C. String x = "1";',
          'D. Long x = 1;',
          'E. Double x = 1;',
          'F. Integer x = new Integer ("1");'
        ],
        answer: 'A,B,F',
        explanation: 'switch支持的数据类型'
      },
      {
        id: 115,
        title: 'Question 115',
        content: `Given:\n\npublic static void main(String[] args) {\n    String ta = "A ";\n    ta = ta.concat("B ");\n    String tb = "C ";\n    ta = ta.concat(tb);\n    ta.replace('C','D');\n    ta = ta.concat(tb);\n    System.out.println(ta);\n}\n\nWhat is the result?`,
        options: [
          'A. A B D C',
          'B. A B C C',
          'C. A B C D',
          'D. A C D',
          'E. A B C'
        ],
        answer: 'B',
        explanation: '字符串不可变性'
      },
      {
        id: 116,
        title: 'Question 116',
        content: `Given:\n\npublic class TestField {\n    int x;\n    int y;\n    public void doStuff(int x, int y) {\n        this.x = x;\n        y =this.y;\n    }\n    public void display() {\n        System.out.print(x + " " + y + " : ");\n    }\n    public static void main(String[] args) {\n        TestField m1 = new TestField();\n        m1.x = 100;\n        m1.y = 200;\n        TestField m2 = new TestField();\n        m2.doStuff(m1.x, m1.y);\n        m1.display();\n        m2.display();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 100 200 : 100 200',
          'B. 100 0 : 100 0 :',
          'C. 100 200 : 100 0 :',
          'D. 100 0 : 100 200 :'
        ],
        answer: 'C',
        explanation: 'this关键字和参数传递'
      },
      {
        id: 117,
        title: 'Question 117',
        content: `public class App {\n    // Insert code here\n    System.out.print(\"Welcome to the world of Java\");\n}\n}\n\nWhich two code fragments, when inserted independently at line // Insert code here, enable the program to execute and print the welcome message on the screen?`,
        options: [
          'A. static public void main (String [] args) {',
          'B. static void main (String [] args) {',
          'C. public static void Main (String [] args) {',
          'D. public static void main (String [] args) {',
          'E. public void main (String [] args) {'
        ],
        answer: 'A,D',
        explanation: 'main方法的正确声明方式'
      },
      {
        id: 118,
        title: 'Question 118',
        content: `Given the code fragment:\n\npublic class Test {\n    public static void main(String[] args) {\n        boolean isChecked = false;\n        int arry[] = {1,3,5,7,8,9};\n        int index = arry.length;\n        while ( <code1> ) {\n            if (arry[index-1] % 2 ==0) {\n                isChecked = true;\n            }\n            <code2>\n        }\n        System.out.print(arry[index]+\", \"+isChecked);\n    }\n}\n\nWhich set of changes enable the code to print 1, true?`,
        options: [
          'A. Replacing <code1> with index > 0 and replacing <code2> with index--;',
          'B. Replacing <code1> with index > 0 and replacing <code2> with --index;',
          'C. Replacing <code1> with index > 5 and replacing <code2> with --index ;',
          'D. Replacing <code1> with index and replacing <code2> with --index ;'
        ],
        answer: 'A,B',
        explanation: '数组遍历条件'
      },
      {
        id: 119,
        title: 'Question 119',
        content: `Which of the following can fill in the blank in this code to make it compile?\n\npublic class Exam{\n    void method(){}\n}\n\npublic class OCAJP extends Exam{\n    _____void method(){}}`,
        options: [
          'A. abstract',
          'B. final',
          'C. private',
          'D. default',
          'E.int'
        ],
        answer: 'B',
        explanation: '方法重写修饰符'
      },
      {
        id: 120,
        title: 'Question 120',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) {\n        int arr[] = new int[4];\n        arr[0] = 1;\n        arr[1] = 2;\n        arr[2] = 4;\n        arr[3] = 5;\n        int sum = 0;\n        try {\n            for (int pos = 0; pos <= 4; pos++) {\n                sum = sum + arr[pos];\n            }\n        } catch (Exception e) {\n            System.out.println("Invalid index");\n        }\n        System.out.println(sum);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 12',
          'B. Invalid Index 12',
          'C. Invalid Index',
          'D. Compilation fails'
        ],
        answer: 'B',
        explanation: '数组越界异常被捕获，但sum值仍被打印'
      },
      {
        id: 121,
        title: 'Question 121',
        content: `Given the code fragment:\n\nclass Student{\n    String name;\n    Int age;\n}\n\nAnd,\n\n1. public class TestP{\n2.     public static void main(String[] args){\n3.         Student s1=new student();\n4.         Student s2=new student ();\n5.         Student s3=new student ();\n6.         S1=s3;\n7.         S3=s2;\n8.         S2=null;\n9.     }\n10. }\n\nWhich statement is true?`,
        options: [
          'A. After line 8, three objects are eligible for garbage collection',
          'B. After line 8, two objects are eligible for garbage collection',
          'C. After line 8, one object is eligible for garbage collection',
          'D. After line 8, none of the objects are eligible for garbage collection'
        ],
        answer: 'C',
        explanation: '只有s2引用的对象可以被垃圾回收'
      },
      {
        id: 122,
        title: 'Question 122',
        content: `Given:\n\npublic class Test {\n    static boolean bVar;\n    public static void main(String[] args) {\n        boolean bVar1 = true; \n        int count =8;\n        do {\n            System.out.println("Hello Java! "+count);\n            if (count >= 7) {\n                bVar1 = false;\n            }\n        } while (bVar != bVar1 && count > 4); \n        count -= 2;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Hello Java! 8 Hello Java! 6 Hello Java! 4',
          'B. Hello Java! 8 Hello Java! 6',
          'C. Hello Java! 8',
          'D. Compilation fails'
        ],
        answer: 'C',
        explanation: '只执行一次循环'
      },
      {
        id: 123,
        title: 'Question 123',
        content: `Given:\n\npublic class Test2{\n    public static void main(String[] args){\n        int ar1[] = {2,4,6,8};\n        int ar2[] = {1,3,5,7,9};\n        ar2 = ar1;\n        for(int e2 : ar2){\n            System.out.print(" " + e2);\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 2 4 6 8',
          'B. 2 4 6 8 9',
          'C. 1 3 5 7',
          'D. 1 3 5 7 9'
        ],
        answer: 'A',
        explanation: '数组引用改变后输出ar1的内容'
      },
      {
        id: 124,
        title: 'Question 124',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    boolean opt = true;\n    switch (opt) {\n        case true;\n            System.out.print("True");\n            break;\n        default:\n            System.out.print("***");\n    }\n    System.out.println("Done");\n}\n\nWhich modification enables the code fragment to print TrueDone?`,
        options: [
          'A. Replace line 5 With String result = "true"; Replace line 7 with case "true":',
          'B. Replace line 5 with boolean opt = 1; Replace line 7 with case 1=',
          'C. At line 9, remove the break statement.',
          'D. Remove the default section.'
        ],
        answer: 'A',
        explanation: 'switch不能使用boolean类型'
      },
      {
        id: 125,
        title: 'Question 125',
        content: `Given the code fragment:\n\nList colors = new ArrayList();\ncolors.add("green");\ncolors.add("red");\ncolors.add("blue");\ncolors.add("yellow");\ncolors.remove(2);\ncolors.add(3,"cyan");\nSystem.out.print(colors);\n\nWhat is the result?`,
        options: [
          'A. [green, red, yellow, cyan]',
          'B. [green, blue, yellow, cyan]',
          'C. [green, red, cyan, yellow]',
          'D. Am IndexOutOfBoundsException is thrown at runtime'
        ],
        answer: 'A',
        explanation: '先移除blue再在索引3插入cyan'
      },
      {
        id: 126,
        title: 'Question 126',
        content: `Given the following four Java file definitions:\n\n// Foo.java\npackage facades;\npublic interface Foo { }\n\n// Boo.java\npackage facades;\npublic interface Boo extends Foo { }\n\n// Woofy.java\npackage org.domain\n// line n1\npublic class Woofy implements Boo, Foo { }\n\n// Test.java\npackage.org;\npublic class Test {\n    public static void main(String[] args) {\n        Foo obj=new Woofy();\n\nWhich set modifications enable the code to compile and run?`,
        options: [
          'A. At line n1, Insert: import facades;At line n2, insert:import facades;import org.domain;',
          'B. At line n1, Insert: import facades.*;At line n2, insert:import facades;import org.*;',
          'C. At line n1, Insert: import facades.*;At line n2, insert:import facades.Boo;import org.*;',
          'D. At line n1, Insert: import facades.Foo, Boo;At line n2, insert:import org.domain.Woofy;',
          'E. At line n1, Insert: import facades.*;At line n2, insert:import facades;import org.domain.Woofy;'
        ],
        answer: 'E',
        explanation: '需要正确导入包和类'
      },
      {
        id: 127,
        title: 'Question 127',
        content: `Given the code fragment:\n\nStringBuilder sb = new StringBuilder ( ) ;\nSb.append ("world");\n\nWhich code fragment prints Hello World?`,
        options: [
          'sb.insert(0,"Hello "); System.out.println(sb);',
          'sb.append(0,"Hello "); System.out.println(sb);',
          'sb.add(0,"Hello "); System.out.println(sb);',
          'sb.set(0,"Hello "); System.out.println(sb);'
        ],
        answer: 'A',
        explanation: 'insert方法在指定位置插入字符串'
      },
      {
        id: 128,
        title: 'Question 128',
        content: `Given the fragments:\n\npublic class TestA extends Root {\n    public static void main(String[] args) {\n        Root r = new TestA();\n        System.out.println(r.method1()); // line n1\n        System.out.println(r.method2()); // line n2\n    }\n}\n\nclass Root {\n    private static final int MAX = 20000;\n    private int method1() {\n        int a = 100 + MAX;\n        return a;\n    }\n    protected int method() {\n        int a = 200 + MAX;\n        return a;\n    }\n}\n\nWhich line causes a compilation error?`,
        options: [
          'A. Line n1',
          'B. Line n2',
          'C. Line n3',
          'D. Line n4'
        ],
        answer: 'B',
        explanation: 'method2()未定义'
      },
      {
        id: 129,
        title: 'Question 129',
        content: `Given:\n\npublic static void main (String[] args) {\n    String[][] chs = new String[2][];\n    chs[0] = new String[2];\n    chs[1] = new String[5];\n    int i = 97;\n    for (int a=0;a<chs.length;a++) {\n        for(int b=0; b<chs.length;b++) {\n            chs[a][b] = "" + i;\n            i++;\n        }\n    }\n    for(String[] ca : chs) {\n        for(String c : ca) {\n            System.out.println(c + " ");\n        }\n        System.out.println();\n    }\n}\n}\n\nWhat is the result?`,
        options: [
          'A. 97 98\n99 100 null null null',
          'B. 91 98\n99 100 101 102 103',
          'C. Compilation rails.',
          'D. A NullPointerException is thrown at runtime.',
          'E. An ArraylndexOutOfBoundsException is thrown at runtime.'
        ],
        answer: 'A',
        explanation: '不规则数组的初始化'
      },
      {
        id: 130,
        title: 'Question 130',
        content: `Given the code fragment:\n\npublic class Test{\n    void readCard (int cardNo)throws Exception{\n        System.out.println("Reading Card");\n    }\n    void checkCard(int cardNo) throws RuntimeException{//line n1\n        System.out.println("Checking Card");\n    }\n    public static void main(String[] args) {\n        Test ex=new Test();\n        int cardNo=12344;\n        ex.checkCard(cardNo); //line n2\n        ex.readCard(cardNo); //line n3\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Reading Card Checking Card',
          'B. Compilation fails only at line n1.',
          'C. Compilation fails only at line n2.',
          'D. Compilation fails only at line n3.',
          'E. Compilation fails at both line n2 and line n3.'
        ],
        answer: 'D',
        explanation: 'readCard()需要处理异常'
      },
      {
        id: 131,
        title: 'Question 131',
        content: `Given:\n\npublic class ScopeTest { \n    int j, int k;\n    public static void main(String[] args) { \n        new ScopeTest().doStuff(); \n    }\n    void doStuff() { \n        int x = 5; \n        doStuff2();\n        System.out.println("x");\n    }\n    void doStuff2() { \n        int y = 7;\n        System.out.println("y");\n        for (int z = 0; z < 5; z++) {\n            System.out.println("z");\n            System.out.println("y");\n        }\n    }\n\nWhich two items are fields?`,
        options: [
          'A. j',
          'B. k',
          'C. x',
          'D. y',
          'E. z'
        ],
        answer: 'A,B',
        explanation: 'j和k是类成员变量'
      },
      {
        id: 132,
        title: 'Question 132',
        content: `Given the code fragment\n\nclass Test2{\n    int fvat;\n    static int cvar;\n    public static void main(String[] args) {\n        Test2 t=new Test2();\n        //insert code here to write fieldvariables\n    }\n}\n\nWhich code fragments, inserted independently, enable the code compile?`,
        options: [
          'A. t.fvar = 200;',
          'B. cvar = 400;',
          'C. fvar = 200;\ncvar = 400;',
          'D. this.fvar = 200; this.cvar = 400;',
          'E. t.fvar = 200; Test2.cvar = 400;',
          'F. this.fvar = 200; Test2.cvar = 400;'
        ],
        answer: 'B',
        explanation: '静态变量可以直接访问'
      },
      {
        id: 133,
        title: 'Question 133',
        content: `Given:\n\npublic class Test{\n    static void dispResult(int [] num) {\n        try {\n            System.out.println(num[1]/(num[1]-num[2]));\n        }catch (ArithmeticException e) {\n            System.out.println("first exception");\n        }\n        System.out.println("Done");\n    }\n    public static void main(String[] args) {\n        try {\n            int[] arr= {100,100};\n            dispResult(arr);\n        }catch (IllegalArgumentException e) {\n            System.err.println("second exception");\n        }catch (Exception e) {\n            System.err.println("third exception");\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 0 Done',
          'B. First Exception Done',
          'C. Second Exception',
          'D. Done\nThird Exception',
          'E. Third Exception'
        ],
        answer: 'E',
        explanation: '数组越界抛出异常'
      },
      {
        id: 134,
        title: 'Question 134',
        content: `Given:\n\nabstract class A1 {\n    public abstract void m1();\n    public void m2() { System.out.println("Green"); }\n}\n\nabstract class A2 extends A1 { \n    public abstract void m3();\n    public void m1() { System.out.println("Cyan"); } \n    public void m2() { System.out.println("Blue"); }\n}\n\npublic class A3 extends A2 {\n    public void m1() { System.out.println("Yellow"); } \n    public void m2() { System.out.println("Pink"); } \n    public void m3() { System.out.println("Red"); } \n    public static void main(String[] args) {\n        A2 tp = new A3(); \n        tp.m1();\n        tp.m2();\n        tp.m3();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Yellow Pink\nRed',
          'B. Cyan Blue Red',
          'C. Cyan Green Red',
          'D. Compilation Fails'
        ],
        answer: 'A',
        explanation: '多态调用实际类的方法'
      },
      {
        id: 135,
        title: 'Question 135',
        content: `Given:\n\nclass A {\n    public A(){\n        System.out.print("A ");\n    }\n}\n\nclass B extends A{\n    public B(){ //line n1\n        System.out.print("B ");\n    }\n}\n\nclass C extends B{\n    public C(){ //line n2\n        System.out.print("C ");\n    }\n    public static void main(String[] args){\n        C c = new C();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. C B A',
          'B. C',
          'C. A B C',
          'D. Compilation fails at line n1 and line n2'
        ],
        answer: 'C',
        explanation: '构造函数调用顺序'
      },
      {
        id: 136,
        title: 'Question 136',
        content: `Given the code fragment:\n\nString shirts[][] = new String[2][2];\nshirts[0][0] = "red";\nshirts[0][1] = "blue";\nshirts[1][0] = "small";\nshirts[1][1] = "medium";\n\nWhich code fragment prints red: blue: small: medium?`,
        options: [
          'A) for (int index = 1; index < 2; index++) {\n    for (int idx = 1; idx < 2; idx++) {\n        System.out.print(shirts[index][idx] + ":");\n    }\n}',
          'B) for (int index = 0; index < 2; index++) {\n    for (int idx = 0; idx < index; ++idx) {\n        System.out.print(shirts[index][idx] + ":");\n    }\n}',
          'C) for (String c : color) {\n    for (String s : sizes) {\n        System.out.print(s + ":");\n    }\n}',
          'D) for (int index = 0; index < 2;) {\n    for (int idx = 0; idx < 2;) {\n        System.out.print(shirts[index][idx] + ":");\n        idx++;\n    }\n    index++;\n}'
        ],
        answer: 'D',
        explanation: '正确遍历二维数组'
      },
      {
        id: 137,
        title: 'Question 137',
        content: `Given:\n\npublic class Product {\n    int id;\n    String name;\n    public Product(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n\nAnd given the code fragment:\n\n4.Product p1 = new Product(101, "pen");\n5.Product p2 = new Product(101, "pen");\n6.Product p3 = p1;\n7.boolean ans1 = p1 == p2;\n8.boolean ans2 = p1.name.equals(p2.name);\n9.System.out.print(ans1 + ":" + ans2);\n\nWhat is the result?`,
        options: [
          'A. true:true',
          'B. true:false',
          'C. false:true',
          'D. false:false'
        ],
        answer: 'C',
        explanation: '==比较引用，equals比较内容'
      },
      {
        id: 138,
        title: 'Question 138',
        content: `Given:\n\nPublic class MyFor1{\n    Public static void main(String[ ] args){\n        int [ ] x ={6,7,8};\n        for(int i : x ){\n            System.out.print(i+" ");\n            i++;\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 6 7 8',
          'B. 7 8 9',
          'C. 0 1 2',
          'D. 6 8 10',
          'E. Compilation fails'
        ],
        answer: 'A',
        explanation: '增强for循环的i是局部变量'
      },
      {
        id: 139,
        title: 'Question 139',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) { \n        int ax = 10, az = 30;\n        int aw = 1, ay = 1;\n        try {\n            aw = ax % 2;\n            ay = az / aw;\n        } catch (ArithmeticException e1) { \n            System.out.println("Invalid Divisor");\n        } catch (Exception e2) {\n            aw = 1;\n            System.out.println("Divisor Changed");\n        }\n        ay = az /aw; // Line 14\n        System.out.println("Succesful Division " + ay);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Invalid Divisor Divisor Changed Successful Division 30',
          'B. Invalid Divisor Successful Division 30',
          'C. Invalid Divisor\nException in thread "main" java.lang.ArithmeticException: / by zero at test.Teagle.main(Teagle.java:14)',
          'D. Invalid Divisor\nException in thread "main" java.lang.ArithmeticException: / by zero at test.Teagle.main(Teagle.java:14)\nSuccessful Division 1'
        ],
        answer: 'C',
        explanation: '除零异常'
      },
      {
        id: 140,
        title: 'Question 140',
        content: `Given the code fragment:\n\n7.StringBuilder sb1 = new StringBuilder("Duke");\n8.string str1 =sb1.toString();\n9. //insert code here\n10. system.out.print (str1 == str2);\n\nWhich code fragment, when inserted at line 9, enables the code to print true?`,
        options: [
          'String str2 = str1;',
          'String str2 = new String (str1);',
          'String str2 = sb1. toString ();',
          'String str2 = "Duke";'
        ],
        answer: 'A',
        explanation: '字符串引用相同'
      },
      {
        id: 141,
        title: 'Question 141',
        content: `Given:\n\npublic class App{\n    String myStr = "7007";\n    public void doStuff(String str){\n        int myNum = 0;\n        try{\n            String myStr =str;\n            myNum = Integer.parseInt(myStr);\n        }catch(NumberFormatException ne ){\n            System.err.println("Error");\n        }\n        System.out.println(\n            "myStr: " + myStr + ", myNum: " + myNum);\n    }\n    public static void mian(String[] args){\n        App obj = new App();\n        obj.doStuff("9009");\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. myStr:9009, myNum:9009',
          'B. myStr:7007, myNum:7007',
          'C. myStr:7007, myNum:9009',
          'D. Compilation fails'
        ],
        answer: 'C',
        explanation: '局部变量不影响成员变量'
      },
      {
        id: 142,
        title: 'Question 142',
        content: `Given:\n\npublic class Whizlabs{\n    public static void main(String[] args){\n        StringBuilder sb = new StringBuilder("1Z0");\n        sb.concat("-808");\n        System.out.println(sb);\n    }\n}\n\nWhat is the output?`,
        options: [
          'A.1Z0',
          'B.1Z0-808',
          'C.An exception will be thrown.',
          'D. Compilation fails to error at line 3',
          'E. Compilation fails to error at line 4'
        ],
        answer: 'E',
        explanation: 'StringBuilder没有concat方法'
      },
      {
        id: 143,
        title: 'Question 143',
        content: `Given the code fragment:\n\n9. int a =-10;\n10.int b = 17;\n11.int c = expression1;\n12.int d = expression2;\n13.c++;\n14.d--;\n15.System.out.println(c + "," + d);\n\nWhat could expression1 and expression2 be,respectively,in order to produce output -8?`,
        options: [
          'A.++a,--b',
          'B.++a,b--',
          'C.A++,--b',
          'D.A++,b--'
        ],
        answer: 'B',
        explanation: '前置++和后置--的组合'
      },
      {
        id: 144,
        title: 'Question 144',
        content: `Given:\n\nclass X{\n    public void mX(){\n        System.out.println("Xm1");\n    }\n}\n\nclass Y extends X{\n    public void mX(){\n        System.out.println("Xm2");\n    }\n    public coid mY(){\n        System.out.println("Ym");\n    }\n}\n\npublic class Test{\n    public static void main(String[] args){\n        X xref = new Y();\n        Y yref = (Y) xref;\n        yref.mY();\n        xref.mx();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A.Ym\nXm2',
          'B.Ym\nXm1',
          'C.Compilation fails',
          'D.A ClassCastException is thrown at runtime'
        ],
        answer: 'A',
        explanation: '多态调用实际类的方法'
      },
      {
        id: 145,
        title: 'Question 145',
        content: `Given:\n\nclass Alpha{\n    int ns;\n    static int s;\n    Alpha(int ns){\n        if(s<ns){\n            s=ns;\n            this.ns=ns;\n        }\n    }\n    void doPrint(){\n        System.out.println("ns="+ns+"s="+s);\n    }\n}\n\npublic class TestA{\n    public static void main(String[]args){\n        Alpha ref1=new Alpha(50);\n        Alpha ref2=new Alpha(125);\n        Alpha ref3=new Alpha(100);\n        ref1.doPrint();\n        ref2.doPrint();\n        ref3.doPrint();\n    }\n}\n\nwhat is this result?`,
        options: [
          'A ns=50 s=125\nns=125 s=125\nns=100 s=125',
          'B ns=50 s=125\nns=125s=125\nns=0 s=125',
          'C ns=50 s=125\nns=125s=125\nns=100 s=100',
          'D ns=50 s=125\nns=125 s=125\nns=0 s=125'
        ],
        answer: 'B',
        explanation: '静态变量s被共享'
      },
      {
        id: 146,
        title: 'Question 146',
        content: `Which two are java Exception classes?`,
        options: [
          'A SercurityException',
          'B DuplicatePathException',
          'C IllegalArgumentException',
          'D TooManyArgumentsException'
        ],
        answer: 'A C',
        explanation: '没有B D这两个异常'
      },
      {
        id: 147,
        title: 'Question 147',
        content: `public static void main(String[]args) {\n    String [ ] [ ] arr= {{\"A\",\"B\",\"C\"},{\"D\",\"E\"}};\n    for(int i=0;i<arr.length;i++) {\n        for(int j=0;j<arr[i].length;j++) {\n            System.out.println(arr[i][j])+\"\");\n            if(arr[i][j].equals(\"B\")){\n                break;\n            }\n        }\n        continue;\n    }\n}`,
        options: [
          'A. A B C',
          'B. A B C D E',
          'C. A B D E',
          'D. Complilaton fails.'
        ],
        answer: 'D',
        explanation: '编译错误'
      },
      {
        id: 148,
        title: 'Question 148',
        content: `Given：\n\npublic class FieldInit{\n    char c;\n    boolean b;\n    float f;\n    void printAll(){\n        System.out.println(\"c=\"+c);\n        System.out.println(\"c=\"+b);\n        System.out.println(\"c=\"+f);\n    }\n    public static void main(String[] args){\n        FieldInit f=new FieldInit();\n        f.printAll();\n    }\n}`,
        options: [
          'A c=null\nb=false\nf=0.0F',
          'B c=0\nb=false\nf=0.0f',
          'C c=null\nb=true\nf=0.0',
          'D c=\nb=false\nf=0.0'
        ],
        answer: 'D',
        explanation: '成员变量默认值'
      },
      {
        id: 149,
        title: 'Question 149',
        content: `Given:\n\nString color = "teal";\nswich (color) {\n    case "Red":\n        System.out.println("Found Red");\n    case "Blue":\n        System.out.println("Found Blue");\n    case "Teal":\n        System.out.println("Found Teal");\n        break;\n    default:\n        System.out.println("Found Default"):\n}\n\nWhat is the result?`,
        options: [
          'A. Found Red\nFound Default',
          'B. Found Teal',
          'C. Found Red\nFound Blue\nFound Teal',
          'D. Found Red\nFound Blue\nFound Teal\nFound Default',
          'E. Found Default'
        ],
        answer: 'E',
        explanation: '没有匹配的case执行default'
      },
      {
        id: 150,
        title: 'Question 150',
        content: `Given the code in a file Traveler.java:\n\nclass Tour{\n    public static void main (String[] args){\n        System.out.println("Happy Journey!" + args[1]);\n    }\n}\n\npublic class Traveler{\n    public static void main (String[] args){\n        Tours.main(args);\n    }\n}\n\nAnd the commands:\n\nJavac Traveler.java\nJava Traveler Java Duke\n\nWhat is the result?`,
        options: [
          'A. Happy Journey! Duke',
          'B. Happy Journey! Java',
          'C. An exception is thrown at runtime',
          'D. The program fails to execute due to a runtime error'
        ],
        answer: 'A',
        explanation: '传入的参数是Java和Duke'
      },
      {
        id: 151,
        title: 'Question 151',
        content: `Given:\n\nclass Mid {\n    public int findMid(int n1, int n2) {\n        return (n1 + n2) / 2;\n    }\n}\n\npublic class Calc extends Mid {\n    public static void main(String[] args) {\n        int n1 = 22, n2 = 2;\n        // insert code here\n        System.out.print(n3);\n    }\n}\n\nWhich two code fragments, when inserted at // insert code here, enable the code to compile and print 12?`,
        options: [
          'A. Calc c = new Calc();\nint n3 = c.findMid(n1,n2);',
          'B. int n3 = super.findMid(n1,n3);',
          'C. Calc c = new Mid();\nint n3 = c.findMid(n1, n2);',
          'D. Mid m1 = new Calc();\nint n3 = m1.findMid(n1, n2);',
          'E. int n3 = Calc.findMid(n1, n2);'
        ],
        answer: 'A,D',
        explanation: '通过实例调用继承的方法'
      },
      {
        id: 152,
        title: 'Question 152',
        content: `Given the code fragment:\n\nLocalDate date1 = LocalDate.now();\nLocalDate date2 = LocalDate.of(2014,6,20);\nLocalDate date3 = LocalDate.parse("2014-06-20",DateTimeFormatter.ISO_DATE);\nSystem.out.println("date1 = "+date1);\nSystem.out.println("date2 = "+date2);\nSystem.out.println("date3 = "+date3);\n\nAssume that the system date is June 20, 2014. What is the result?`,
        options: [
          'A. date1 = 2014-06-20\ndate2 = 2014-06-20\ndate3 = 2014-06-20',
          'B. date1 = 6/20/14\ndate2 = 2014-06-20\ndate3 = Jun 20, 2014',
          'C. date1 = 2014-06-20\ndate2 = June 20, 2014\ndate3 = 6/20/14',
          'D. date1 = June 20, 2014\ndate2 = 2014-06-20\ndate3 = 2014-06-20'
        ],
        answer: 'A',
        explanation: 'LocalDate的不同创建方式'
      },
      {
        id: 153,
        title: 'Question 153',
        content: `Given:\n\nclass Alpha{\n    int ns;\n    static int s;\n    Alpha(int ns){\n        if(s<ns){\n            s=ns;\n            this.ns=ns;\n        }\n    }\n    void doPrint(){\n        System.out.println("ns="+ns+"s="+s);\n    }\n}\n\npublic class TestA{\n    public static void main(String[] args){\n        Alpha ref1=new Alpha(50);\n        Alpha ref2=new Alpha(125);\n        Alpha ref3=new Alpha(100);\n        ref1.doPrint();\n        ref2.doPrint();\n        ref3.doPrint();\n    }\n}\n\nwhat is the result?`,
        options: [
          'A. ns=50 s=125\nns=125 s=125\nns=100 s=125',
          'B. ns=50 s=125\nns=125 s=125\nns=0 s=125',
          'C. ns=50 s=125\nns=125 s=125\nns=100 s=100',
          'D. ns=50 s=125\nns=125 s=125\nns=0 s=125'
        ],
        answer: 'B',
        explanation: '静态变量和实例变量的区别'
      },
      {
        id: 154,
        title: 'Question 154',
        content: `Which two are java Exception classes?`,
        options: [
          'A. SercurityException',
          'B. DuplicatePathException',
          'C. IllegalArgumentException',
          'D. TooManyArgumentsException'
        ],
        answer: 'A,C',
        explanation: 'Java标准异常类'
      },
      {
        id: 155,
        title: 'Question 155',
        content: `public static void main(String[] args) {\n    String [][] arr= {{\"A\",\"B\",\"C\"},{\"D\",\"E\"}};\n    for(int i=0;i<arr.length;i++) {\n        for(int j=0;j<arr[i].length;j++) {\n            System.out.println(arr[i][j]+\" \");\n            if(arr[i][j].equals(\"B\")){\n                break;\n            }\n        }\n        continue;\n    }\n}`,
        options: [
          'A. A B C',
          'B. A B C D E',
          'C. A B D E',
          'D. Complilaton fails.'
        ],
        answer: 'D',
        explanation: '编译错误'
      },
      {
        id: 156,
        title: 'Question 156',
        content: `Given:\n\npublic class FieldInit{\n    char c;\n    boolean b;\n    float f;\n    void printAll(){\n        System.out.println("c="+c);\n        System.out.println("c="+b);\n        System.out.println("c="+f);\n    }\n    public static void main(String[] args){\n        FieldInit f=new FieldInit();\n        f.printAll();\n    }\n}`,
        options: [
          'A. c=null\nb=false\nf=0.0F',
          'B. c=0\nb=false\nf=0.0f',
          'C. c=null\nb=true\nf=0.0',
          'D. c=\nb=false\nf=0.0'
        ],
        answer: 'D',
        explanation: '基本类型默认值'
      },
      {
        id: 157,
        title: 'Question 157',
        content: `Given:\n\nString color = "teal";\nswich (color) {\n    case "Red":\n        System.out.println("Found Red");\n    case "Blue":\n        System.out.println("Found Blue");\n    case "Teal":\n        System.out.println("Found Teal");\n        break;\n    default:\n        System.out.println("Found Default");\n}`,
        options: [
          'A. Found Red\nFound Default',
          'B. Found Teal',
          'C. Found Red\nFound Blue\nFound Teal',
          'D. Found Red\nFound Blue\nFound Teal\nFound Default',
          'E. Found Default'
        ],
        answer: 'E',
        explanation: 'switch语句匹配'
      },
      {
        id: 158,
        title: 'Question 158',
        content: `Given the code in a file Traveler.java:\n\nclass Tour{\n    public static void main (String[] args){\n        System.out.println("Happy Journey!" + args[1]);\n    }\n}\n\npublic class Traveler{\n    public static void main (String[] args) {\n        Tours.main(args);\n    }\n}\n\nAnd the commands:\n\nJavac Traveler.java\nJava Traveler Java Duke\n\nWhat is the result?`,
        options: [
          'A. Happy Journey! Duke',
          'B. Happy Journey! Java',
          'C. An exception is thrown at runtime',
          'D. The program fails to execute due to a runtime error'
        ],
        answer: 'A',
        explanation: '命令行参数传递'
      },
      {
        id: 159,
        title: 'Question 159',
        content: `Given:\n\n1.import java.util.ArrayList;\n2.import java.util.List;\n3.\n4.public class Whizlabs{\n5.\n6.public static void main(String[] args){\n7.List<Integer> list= new ArrayList<>();\n8.list.add(21);list.add(13);\n9.list.add(30);list.add(11);\n10.list.add(2);\n11//insert here\n12.System.out.ptintln(list);\n13.}\n14.}\n\nWhich inserted at line 11, will provide the following output?\n[21, 13, 11]`,
        options: [
          'A. list.removelf(e > e%2 != 0);',
          'B. list.removelf(e -> e%2 != 0);',
          'C. Ust.removelf(e -> e%2 == 0);',
          'D. list.remove(e -> e%2 == 0);',
          'E. None of the above.'
        ],
        answer: 'C',
        explanation: '使用removeIf移除偶数'
      },
      {
        id: 160,
        title: 'Question 160',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    ArrayList<String> List = new ArrayList<>();\n    List.add("SE");\n    List.add("EE");\n    List.add("ME");\n    List.add("SE");\n    List.add("EE");\n    List.remove("SE");\n    System.out.println("Values are :" + List);\n}\n\nWhat is the result?`,
        options: [
          'A. Values are : [EE, ME]',
          'B. Values are : [EE, EE, ME]',
          'C. Values are : [EE, ME, EE]',
          'D. Values are : [SE, EE, ME, EE]',
          'E. Values are : [EE, ME, SE, EE]'
        ],
        answer: 'E',
        explanation: 'ArrayList的remove方法'
      },
      {
        id: 161,
        title: 'Question 161',
        content: `Given:\n\nclass Vehicle{\n    String type = "4w";\n    int maxSpeed = 100;\n    Vehicle(String type ,int maxSpeed){\n        this.type = type ;\n        this.maxSpeed = maxSpeed;\n    }\n}\n\nclass Car extends Vehicle{\n    String trans ;\n    Car (String trans){ // line n1\n        this.trans = trans ;\n    }\n    Car(String type,int maxSpeed,String trans){\n        super(type,maxSpeed);\n        this(trans); //line n2\n    }\n}\n}\n\nAnd given the code fragment:\n\nCar c1 = new Car ("Auto");\nCar c2 = new Car("4w",150,"Manual");\nSystem.out.println(c1.type+" "+ c1.maxSpeed + " " + c1.trans);\nSystem.out.println(c2.type+" "+ c2.maxSpeed +" " + c2.trans);\n\nWhat is the result?`,
        options: [
          'A. 4W 100 Auto\n4W 150 Manual',
          'B. Null 0 Auto\n4W 150 Manual',
          'C. Compilation fails only at line n1',
          'D. Compilation fails only at line n2',
          'E. Compilation fails at both line n1 and line n2'
        ],
        answer: 'E',
        explanation: '构造函数调用错误'
      },
      {
        id: 162,
        title: 'Question 162',
        content: `Given the code fragment:\n\npublic static void main (String[] args){\n    // line n1\n    switch(x){\n        case 1;\n            System.out.println("One");\n            break;\n        case 2;\n            System.out.println("Two");\n            break;\n    }\n}\n\nwhich three code fragments can be independently inserted at n1 to enable the code to print One?`,
        options: [
          'A. Integer x=new Integer("1");',
          'B. long x=1;',
          'C. byte x=1;',
          'D. short x=1;',
          'E. double x=1;',
          'F. String x="1";'
        ],
        answer: 'A,C,D',
        explanation: 'switch支持的类型'
      },
      {
        id: 163,
        title: 'Question 163',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    String ta = "A ";\n    ta = ta.concat("B ");\n    String tb = "C ";\n    ta = ta.concat(tb);\n    ta.replace('C','D');\n    ta = ta.concat(tb);\n    System.out.println(ta);\n}\n\nWhat is the result?`,
        options: [
          'A. A B D C',
          'B. A B C C',
          'C. A B C D',
          'D. A C D',
          'E. A B C',
          'F. A B C C'
        ],
        answer: 'F',
        explanation: '字符串不可变性'
      },
      {
        id: 164,
        title: 'Question 164',
        content: `Given the code fragment:\n\npublic class TestField {\n    int x;\n    int y;\n    public void doStuff(int x, int y) {\n        this.x = x;\n        y =this.y;\n    }\n    public void display() {\n        System.out.print(x + " " + y + " : ");\n    }\n    public static void main(String[] args) {\n        TestField m1 = new TestField();\n        m1.x = 100;\n        m1.y = 200;\n        TestField m2 = new TestField();\n        m2.doStuff(m1.x, m1.y);\n        m1.display();\n        m2.display();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 100 200 : 100 200',
          'B. 100 0 : 100 0 :',
          'C. 100 200 : 100 0 :',
          'D. 100 0 : 100 200 :'
        ],
        answer: 'C',
        explanation: '方法参数传递'
      },
      {
        id: 165,
        title: 'Question 165',
        content: `public class App {\n    // Insert code here\n    System.out.print("Welcome to the world of Java");\n    }\n}\n\nWhich two code fragments, when inserted independently at line // Insert code here, enable the program to execute and print the welcome message on the screen?`,
        options: [
          'A. static public void main (String [] args) {',
          'B. static void main (String [] args) {',
          'C. public static void Main (String [] args) {',
          'D. public static void main (String [] args) {',
          'E. public void main (String [] args) {'
        ],
        answer: 'A,D',
        explanation: 'main方法的正确声明方式'
      },
      {
        id: 166,
        title: 'Question 166',
        content: `Given the code fragment:\n\npublic class Test {\n    static int count = 0 ;\n    int i = 0;\n    public void changeCount(){\n        while (i<5){\n            i++;\n            count++;\n        }\n    }\n    public static void main (String [] args){\n        Test check1=new Test();\n        Test check2=new Test();\n        check1.changeCount();\n        check2.changeCount();\n        System.out.print(check1.count + ":" + check2.count);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 10 : 10',
          'B. 5 : 5',
          'C. 5 : 10',
          'D. Compilation fails'
        ],
        answer: 'A',
        explanation: '静态变量共享'
      },
      {
        id: 167,
        title: 'Question 167',
        content: `Which of the following can fill in the blank in this code to make it compile?\n\npublic class Exam{\n    void method(){}\n}\n\npublic class OCAJP extends Exam{\n    _____void method(){}}`,
        options: [
          'A. abstract',
          'B. final',
          'C. private',
          'D. default',
          'E. int'
        ],
        answer: 'B',
        explanation: '方法重写修饰符'
      },
      {
        id: 168,
        title: 'Question 168',
        content: `Given the code fragment:\n\nint x = 100;\nint a = x++;\nint b = ++x;\nint c = x++;\nint d = (a < b) ? (a < c) ? a: (b < c) ? b: c;\nSystem.out.println(d) ;\n\nWhat is the result?`,
        options: [
          'A. 100',
          'B. 101',
          'C. 102',
          'D. 103',
          'E. Compilation fails'
        ],
        answer: 'E',
        explanation: '三目运算符语法错误'
      },
      {
        id: 169,
        title: 'Question 169',
        content: `Given:\n\nclass X{\n    int x1, x2, x3;\n}\n\nclass Y extends X {\n    int y1;\n    Y() {\n        x1 = 1;\n        x2 = 2;\n        y1 = 10;\n    }\n}\n\nclass Z extends Y {\n    int z1;\n    Z() {\n        x1 = 3;\n        y1 = 20;\n        z1 = 100;\n    }\n}\n\nAnd,\n\npublic class Test3{\n    public static void main(String[] args){\n        z obj = new Z();\n        System.out.println(obj.x3 + "," + obj.y1 + "," + obj.z1);\n    }\n}\n\nWhich constructor initializes the variable x3?`,
        options: [
          'A. Only the default constructor of class X',
          'B. Only the no-argument constructor of class Y',
          'C. Only the no-argument constructor of class Z',
          'D. Only the default constructor of object class'
        ],
        answer: 'A',
        explanation: '变量初始化'
      },
      {
        id: 170,
        title: 'Question 170',
        content: `Given:\n\npublic class Msg {\n    public static String doMsg (char x) {\n        return "Good Day!";\n    }\n    public static String doMsg (int y) {\n        return "Good Luck! ";\n    }\n    public static void main (String[] args){\n        char x= 8;\n        int z = '8';\n        System.out.println(doMsg (x));\n        System.out.print (doMsg (z)) ;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Good Day!\nGood Luck!',
          'B. Good Day!\nGood Day!',
          'C. Good Luck!\nGood Day!',
          'D. Good Luck!\nGood Luck!',
          'E. Compilation fails'
        ],
        answer: 'A',
        explanation: '方法重载'
      },
      {
        id: 171,
        title: 'Question 171',
        content: `Given the code fragment:\n\npublic class Test {\n    public static void main(String[] args)\n    { Test t = new Test();\n        int[] arr = new int[10];\n        arr = t.subArray(arr,0,2);\n    }\n    // insert code here\n}\n\nWhich method can be inserted at line // insert code here to enable the code to compile?`,
        options: [
          'A. public int[] subArray(int[] src, int start, int end) { return src;\n}',
          'B. public int subArray(int src, int start, int end) { return src;\n}',
          'C. public int[] subArray(int src, int start, int end) { return src;\n}',
          'D. public int subArray(int[] src, int start, int end) { return src;\n}'
        ],
        answer: 'A',
        explanation: '方法签名匹配'
      },
      {
        id: 172,
        title: 'Question 172',
        content: `Given:\n\npublic class MarkList{\n    int num;\n    public static void graceMarks(MarkList obj4){\n        obj4.num+=10;\n    }\n    public static void main(String[] args){\n        MarkList obj1=new MarkList();\n        MarkList obj2=obj1;\n        MarkList obj3=null;\n        obj2.num=60;\n        graceMarks(obj2);\n    }\n}\n\nHow many MarkList instances are created in memory at runtime?`,
        options: [
          'A. 1',
          'B. 2',
          'C. 3',
          'D. 4'
        ],
        answer: 'A',
        explanation: '对象创建数量'
      },
      {
        id: 173,
        title: 'Question 173',
        content: `Which usage reprensents a valid way of compling java source file with the name" Main"?`,
        options: [
          'A. javac Main .java',
          'B. java Main.class',
          'C. java Main.java',
          'D. javac Main',
          'E. java Main'
        ],
        answer: 'A',
        explanation: 'Java编译命令'
      },
      {
        id: 174,
        title: 'Question 174',
        content: `Given:\n\ninterface Readable{\n    public void readBook();\n    public void setBookMark();\n}\n\nabstract class Book implements Readable{ //line n1\n    public void readBook() { }\n    //line n2\n}\n\nclass EBook extends Book{ //line n3\n    public void readBook() { }\n    //line n4\n}\n\nAnd given the code fragment:\n\nBook book1=new EBook();\nbook1.readBook();\n\nWhich option enables the code compile?`,
        options: [
          'A) Replace the code fragment at line n1 with :\nclass Book implements Readable{',
          'B) At line n2 insert\npublic abstrace void setBookMark();',
          'C) Replace the code fragment at line n3 with:\nabstract class EBook extends Book{',
          'D) At line n4 insert :\npublic void setBookMark(){}'
        ],
        answer: 'D',
        explanation: '实现接口方法'
      },
      {
        id: 175,
        title: 'Question 175',
        content: `Given the code fragment:\n\n3. public static void main(String[] args) {\n4. int x=5;\n5. while(isAvailable(x)) {\n6. System.out.println(x);\n7.\n8. }\n9. }\n10.\n11. public static boolean isAvailable(int x){\n12. return x-->0?true:false;\n13. }\n\nwhich modification enables the code to print 54321?`,
        options: [
          'A) Replace line 12 with retrun(x>0)?false:true;',
          'B) Replace line 6 with System.out.println(--x);',
          'C) At line 7, insert x--;',
          'D) Replace line 6 with --x; and at line 7 insert sysytem.out.print(x);'
        ],
        answer: 'C',
        explanation: '循环控制'
      },
      {
        id: 176,
        title: 'Question 176',
        content: `Given:\n\nclass Caller {\n    private void init() {\n        System.out.println("Inintialized");\n    }\n    public void start() {\n        init();\n        System.out.println("Started");\n    }\n}\n\npublic class Testcall {\n    public static void main(String[] args){\n        Caller c = new Caller();\n        c.start();\n        c.init();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. Initialized\nStarted',
          'B. Initialized\nStarted\nInitialized',
          'C. Compilation fails',
          'D. An exception is thrown at runtime'
        ],
        answer: 'C',
        explanation: '私有方法访问限制'
      },
      {
        id: 177,
        title: 'Question 177',
        content: `Given:\n\npublic class APP {\n    public static void main(String[] args) {\n        int i = 10;\n        int j = 20;\n        int k = j += i / 5;\n        System.out.println(i + " : " + j + " : " + k);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 10 : 22 : 20',
          'B. 10 : 22 : 22',
          'C. 10 : 22 : 6',
          'D. 10 : 30 : 6'
        ],
        answer: 'B',
        explanation: '运算符优先级'
      },
      {
        id: 178,
        title: 'Question 178',
        content: `Given the code fragment:\n\n24. float var1 = (12_345.01 >= 123_45.00) ? 12_456 : 1224_56.02f;\n25. float var2 = var1 + 1024;\n26. System.out.println(var2);\n\nWhat is the result?`,
        options: [
          'A. 13480.0',
          'B. 13480.02',
          'C. Compilation fails',
          'D. An exception is thrown at runtime'
        ],
        answer: 'A',
        explanation: '三目运算符和数值计算'
      },
      {
        id: 179,
        title: 'Question 179',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) {\n        int day = 1;\n        switch (day) {\n            case "7": System.out.print("Uranus");\n            case "6": System.out.print("Saturn");\n            case "1": System.out.print("Mercury");\n            case "2": System.out.print("Venus");\n            case "3": System.out.print("Earth");\n            case "4": System.out.print("Mars");\n            case "5": System.out.print("Jupiter");\n        }\n    }\n}\n\nWhich two modifications, made independently, enable the code to compile and run?`,
        options: [
          'A. Adding a break statement after each print statement',
          'B. Adding a default section within the switch code-block',
          'C. Changing the string literals in each case label to integer',
          'D. Changing the type of the variable day to String',
          'E. Arranging the case labels in ascending order'
        ],
        answer: 'C,D',
        explanation: 'switch语句类型匹配'
      },
      {
        id: 180,
        title: 'Question 180',
        content: `Which three statements are true about the structure of a Java class?`,
        options: [
          'A. A class can have only one private constructor.',
          'B. A method can have the same name as a field.',
          'C. A class can have overloaded static methods.',
          'D. A public class must have a main method.',
          'E. The methods are mandatory components of a class.',
          'F. The fields need not be initialized before use.'
        ],
        answer: 'B,C,F',
        explanation: 'Java类结构'
      },
      {
        id: 181,
        title: 'Question 181',
        content: `Given:\n\npublic class TestScope{\n    public static void main(String[] args) {\n        int var1 = 200;\n        System.out.println(doCalc(var1));\n        System.out.println(" "+var1);\n    }\n    static int doCalc(int var1){\n        var1 = var1*2;\n        return var1;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A.400 200',
          'B.200 200',
          'C.400 400',
          'D.Compilation fails'
        ],
        answer: 'A',
        explanation: '方法参数传递的是值拷贝'
      },
      {
        id: 182,
        title: 'Question 182',
        content: `public class StringReplace{\n    public static void main(String[] args) {\n        String message = "Hi everyone!";\n        System.out.println("message = "+message.replace("e","X"));\n    }\n}\n\nWhat is the result?`,
        options: [
          'A.message = Hi everyone!',
          'B.message = Hi XvXryonX!',
          'C.A compile time error is produced',
          'D.A runtime error is produced',
          'E.message =',
          'F.message = Hi Xveryone!'
        ],
        answer: 'B',
        explanation: 'replace方法替换所有匹配字符'
      },
      {
        id: 183,
        title: 'Question 183',
        content: `Which two are benefits of polymorphism?`,
        options: [
          'A. Faster code at runtime',
          'B. More efficient code at runtime',
          'C. More dynamic code at runtime',
          'D. More flexible and reusable code',
          'E. Code that is protected from extension by other classes'
        ],
        answer: 'C,D',
        explanation: '多态的好处是更动态的代码和更灵活可重用的代码'
      },
      {
        id: 184,
        title: 'Question 184',
        content: `Given:\n\npublic class Series{\n    private boolean flag;\n    public void displaySeries(){\n        int num =2;\n        while(flag){\n            if(num % 7 == 0)\n                flag = false;\n            System.out.println(num);\n            num +=2;\n        }\n    }\n    public static void main(String[] args) {\n        new Series().displaySeries();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 2 4 6 8 10 12',
          'B. 2 4 6 8 10 12 14',
          'C. Compilation fails',
          'D. The program prints multiple of 2 infinite times',
          'E. The program prints nothing'
        ],
        answer: 'E',
        explanation: 'flag初始为false，不进入循环'
      },
      {
        id: 185,
        title: 'Question 185',
        content: `Given:\n\nTest.java\npublic class Test{\n    public static void main(String[] args){\n        Integer num = Integer.parseInt(args[1]);\n        System.out.println("Number is : " + num);\n    }\n}\n\nAnd the commands:\nJavac Test.java\nJava Test 12345\n\nWhat is the result?`,
        options: [
          'A:Number us:12345',
          'B:A NullPointerException is thrown at runtime',
          'C:A NumberFormatException is thrown at runtime',
          'D:AnArrayIndexOutOfBoundException is thrown at runtime.'
        ],
        answer: 'A',
        explanation: '参数12345被正确解析'
      },
      {
        id: 186,
        title: 'Question 186',
        content: `Given the code format:\n\nclass DBConfiguration {\n    String user;\n    String password;\n}\n\npublic class DBHandler{\n    DBConfiguration configureDB(String uname,String password){\n        // insert code here\n    }\n    public static void main(String[] args) {\n        DBHandler r = new DBHandler();\n        DBConfiguration dbConf = r.configureDB("manger", "manger");\n    }\n}\n\nWhich code fragment must be inserted at line 6 to enable the code to compile?`,
        options: [
          'A. DBConfiguration f;\nreturn f;',
          'B. return DBConfiguration;',
          'C. return new DBConfiguration;',
          'D. retutn 0;',
          'E. DBConfiguration f=new DBConfiguration(); return f;',
          'F. return new DBConfiguration();'
        ],
        answer: 'F',
        explanation: '需要返回DBConfiguration实例'
      },
      {
        id: 187,
        title: 'Question 187',
        content: `Given:\n\ninterface Pet { }\nclass Dog implements Pet { }\npublic class Beagle extends Dog{ }\n\nWhich three are valid?`,
        options: [
          'A. Pet a = new Dog();',
          'B. Pet b = new Pet();',
          'C. Dog f = new Pet();',
          'D. Dog d = new Beagle();',
          'E. Pet e = new Beagle();',
          'F. Beagle c = new Dog();'
        ],
        answer: 'A,D,E',
        explanation: '正确的多态用法'
      },
      {
        id: 188,
        title: 'Question 188',
        content: `Consider following method\n\ndefault void print(){\n}\n\nWhich statement is true?`,
        options: [
          'A. This method is invalid.',
          'B. This method can be used only in an interface.',
          'C. This method can return anything.',
          'D. This method can be used only in an interface or an abstract class.',
          'E. None of above.'
        ],
        answer: 'B',
        explanation: 'default方法只能在接口中使用'
      },
      {
        id: 189,
        title: 'Question 189',
        content: `Given:\n\npublic class Test{\n    public static void main(String[] args) {\n        String str = " ";\n        str.trim();\n        System.out.println(str.equals("") + " " + str.isEmpty());\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) true true',
          'B) true false',
          'C) false false',
          'D) false true'
        ],
        answer: 'C',
        explanation: 'trim()不改变原字符串'
      },
      {
        id: 190,
        title: 'Question 190',
        content: `public class Question190 {\n    abstract class Planet {\n        protected void revolve(){ //line n1\n        }\n        abstract void rotate(); //line n2\n    }\n    class Earth extends Planet {\n        void revolve(){ //line n3\n        }\n        protected void rotate(){ //line n4\n        }\n    }\n}\n\nWhich two modifications, made independently, enable the code to compile?`,
        options: [
          'A) Make the method at line n1 public.',
          'B) Make the method at line n2 public.',
          'C) Make the method at line n3 public.',
          'D) Make the method at line n3 protected.',
          'E) Make the method at line n4 public.'
        ],
        answer: 'C,D',
        explanation: '子类方法访问权限不能比父类更严格'
      },
      {
        id: 191,
        title: 'Question 191',
        content: `public class Student {\n    public String name ="";\n    public int age = 0;\n    public String major = "Undeclared";\n    public boolean fulltime = true;\n    public void display(){\n        System.out.println("Name:" + name + "Major:" + major);}\n    public boolean isFulltime(){\n        return fulltime;\n    }\n}\n\nWhich line of code initializes a student instance?`,
        options: [
          'A) Student student1;',
          'B) Student student1 = Student.new();',
          'C) Student student1 = new Student();',
          'D) Student student1 = Student();'
        ],
        answer: 'C',
        explanation: '正确的对象初始化方式'
      },
      {
        id: 192,
        title: 'Question 192',
        content: `Given the code fragment:\n\nString[] cartoons = {"tom","jerry","micky","tom"};\nint counter =0;\nif ("tom".equals(cartoons[0])) {\n    counter++;\n} else if ("tom".equals(cartoons[1])) {\n    counter++;\n} else if ("tom".equals(cartoons[2])) {\n    counter++;\n} else if ("tom".equals(cartoons[3])) {\n    counter++;\n}\nSystem.out.print(counter);\n\nWhat is the result?`,
        options: [
          'A. 1',
          'B. 2',
          'C. 4',
          'D. 0'
        ],
        answer: 'A',
        explanation: '只有第一个元素匹配'
      },
      {
        id: 193,
        title: 'Question 193',
        content: `Which statement best describes encapsulation?`,
        options: [
          'A. Encapsulation ensures that classes can be designed so that only certain fields and methods of an object are accessible from other objects.',
          'B. Encapsulation ensures that classes can be designed so that their methods are inheritable.',
          'C. Encapsulation ensures that classes can be designed with some fields and methods declared as abstract.',
          'D. Encapsulation ensures that classes can be designed so that if a method has an argument MyType x, any subclass of MyType can be passed to that method.'
        ],
        answer: 'A',
        explanation: '封装确保只有特定字段和方法可从外部访问'
      },
      {
        id: 194,
        title: 'Question 194',
        content: `Given:\n\nMainTest.java:\npublic class MainTest {\n    public static void main (int[] args) {\n        System.out.println("int main "+args[0]);\n    }\n    public static void main (Object[] args) {\n        System.out.println("Object main "+args[0]);\n    }\n    public static void main (String[] args) {\n        System.out.println("String main "+args[0]);\n    }\n}\n\nand commands :\njavac MainTest.java\njava Maintest 1 2 3\n\nwhat is the result?`,
        options: [
          'A. int main 1',
          'B. Object main 1',
          'C. String main 1',
          'D. Compilation fails',
          'E. An exception is thrown at runtime'
        ],
        answer: 'C',
        explanation: '只有String[]参数的main方法会被调用'
      },
      {
        id: 195,
        title: 'Question 195',
        content: `Given the code fragment:\n\nfor (int ii = 0; ii < 3;ii++) {\n    int count = 0;\n    for (int jj = 3; jj > 0; jj--) {\n        if (ii == jj) {\n            ++count;\n            break;\n        }\n    }\n    System.out.print(count);\n    continue;\n}\n\nWhat is the result?`,
        options: [
          'A. 011',
          'B. 012',
          'C. 123',
          'D. 000'
        ],
        answer: 'A',
        explanation: '内层循环计数匹配情况'
      },
      {
        id: 196,
        title: 'Question 196',
        content: `What is the proper way to defined a method that take two int values and returns their sum as an int value?`,
        options: [
          'A.int sum(int first, int second) { first + second; }',
          'B.int sum(int first, second) { return first + second; }',
          'C.sum(int first, int second) { return first + second; }',
          'D.int sum(int first, int second) { return first + second; }',
          'E.void sum (int first, int second) { return first + second; }'
        ],
        answer: 'D',
        explanation: '正确的方法定义语法'
      },
      {
        id: 197,
        title: 'Question 197',
        content: `Given the content of three files:\n\nA.java:\npublic class A {\n    public void a() {}\n    int a;\n}\n\nB.java:\npublic class B {\n    private int doStuff() {\n        private int x = 100;\n        return x++;\n    }\n}\n\nC.java:\nimport java.io.*;\npackage p1;\nclass A{\n    public void main (String fileName) throws IOException { }\n}\n\nWhich statement is true?`,
        options: [
          'A.Only the A.Java file compiles successfully.',
          'B.Only the B.java file compiles successfully.',
          'C.Only the C.java file compiles successfully.',
          'D.The A.Java and B.java files compile successfully.',
          'E.The B.java and C.java files compile successfully.',
          'F.The A.Java and C.java files compile successfully.'
        ],
        answer: 'A',
        explanation: '只有A.java没有语法错误'
      },
      {
        id: 198,
        title: 'Question 198',
        content: `Given the code fragment:\n\n3. public static void main(String[] args) {\n4.    int iVar = 100;\n5.    float fVar = 100.100f;\n6.    double dVar = 123;\n7.    iVar = fVar;\n8.    fVar = iVar;\n9.    dVar = fVar;\n10.   fVar = dVar;\n11.   dVar = iVar;\n12.   iVar = dVar;\n13. }\n\nWhich three lines fail to compile?`,
        options: [
          'A.Line 7',
          'B.Line 8',
          'C.Line 9',
          'D.Line 10',
          'E.Line 11',
          'F.Line 12'
        ],
        answer: 'A,D,F',
        explanation: '类型不兼容的赋值操作'
      },
      {
        id: 199,
        title: 'Question 199',
        content: `Given:\n\npublic class Access{\n    private int x = 0;\n    private int y = 0;\n    public static void main(String[] args) {\n        Access accApp = new Access();\n        accApp.printThis(1,2);\n        accApp.printThat(3,4);\n    }\n    public void printThis(int x,int y) {\n        x = x;\n        y = y;\n        System.out.println("x:" + this.x +"y:" + this.y);\n    }\n    public void printThat(int x,int y) {\n        this.x = x;\n        this.y = y;\n        System.out.println("x:" + this.x + "y:" + this.y);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A.x:1 y:2 x:3 y:4',
          'B:x:0 y:0 x:3 y:4',
          'C:x:1 y:2 x:0 y:0',
          'D:x:0 y:0 x:0 y:0'
        ],
        answer: 'B',
        explanation: 'this关键字的使用区别'
      },
      {
        id: 200,
        title: 'Question 200',
        content: `Given:\n\npublic class Palindrome{\n    public static int main(String[] args) {\n        System.out.println(args[1]);\n        return 0;\n    }\n}\n\nAnd the commands:\njavac Palindrome.java\njava Palindrome Wow Mom\n\nWhat is the result?`,
        options: [
          'A. Compilation fails',
          'B. The code compiles,but does not execute.',
          'C. Paildrome',
          'D. Wow',
          'E. Mom'
        ],
        answer: 'B',
        explanation: 'main方法必须返回void'
      },
      {
        id: 201,
        title: 'Question 201',
        content: `What is the name of the Java concept that uses access modifiers to protect variables and hide them within a class?`,
        options: [
          'A. Encapsulation',
          'B. Inheritance',
          'C. Abstraction',
          'D. Instantiation',
          'E. Polymorphism'
        ],
        answer: 'A',
        explanation: '封装的概念'
      },
      {
        id: 202,
        title: 'Question 202',
        content: `Given the code fragment:\n\npublic static List data = new ArrayList();\n//insert code here\n{\n    for (String x : strs) {\n        data.add(x);\n    }\n    return data;\n}\npublic static void main (String[] args){\n    String[] d = {"a" , "b" , "c"};\n    update(d);\n    for(String s : d){\n        System.out.print(s + " ");\n    }\n}\n\nWhich code fragment , when inserted at //insert code here , enables the code to compile and print a b c ?`,
        options: [
          'A.List update (String[] strs)',
          'B.static ArrayListupdate(String[] strs)',
          'C.static List update(String[] strs)',
          'D.static void update(String[] strs)',
          'E.ArrayList static update(String[] strs)'
        ],
        answer: 'C',
        explanation: '正确的方法签名'
      },
      {
        id: 203,
        title: 'Question 203',
        content: `Given the code fragment:\n\nSystem.out.println(28 + 5 <= 4 + 29);\nSystem.out.println((28 + 5) <= (4 + 29));\n\nWhat is the result?`,
        options: [
          'A. 28false29\ntrue',
          'B.285 < 429\ntrue',
          'C.true\ntrue',
          'D.complication fails'
        ],
        answer: 'C',
        explanation: '两个表达式结果相同'
      },
      {
        id: 204,
        title: 'Question 204',
        content: `Which statement is true about Java byte code?`,
        options: [
          'A.It can run on any platform.',
          'B.It can run on any platform only if it was compiled for that platform.',
          'C.It can run on any platform that has the Java Runtime Environment.',
          'D.It can run on any platform that has a Java compiler.',
          'E.It can run on any platform only if that platform has both the Java Runtime Environment and a Java compiler.'
        ],
        answer: 'C',
        explanation: 'Java字节码需要JRE运行'
      },
      {
        id: 205,
        title: 'Question 205',
        content: `Given:\n\npublic class Test {\n    public static int stVar = 100;\n    public int var = 200;\n    public String toString(){\n        return var + ":" + stVar;\n    }\n}\n\nAnd given the code fragment:\nTest t1 = new Test();\nt1.var = 300;\nSystem.out.println(t1);\nTest t2 = new Test();\nt2.stVar = 300;\nSystem.out.println(t2);\n\nWhat is the result?`,
        options: [
          'A.300:300\n200:300',
          'B.300:100\n200:300',
          'C.300:0\n0:300',
          'D.200:300\n200:300'
        ],
        answer: 'B',
        explanation: '静态变量和实例变量的区别'
      },
      {
        id: 206,
        title: 'Question 206',
        content: `Given the code fragment:\n\nint wd = 0;\nString days[] = {"sun","mon","wed","sat"};\nfor (String s:days) {\n    switch (s) {\n        case "sat":\n        case "sun":\n            wd -= 1;\n            break;\n        case "mon":\n            wd++;\n        case "wed":\n            wd += 2;\n    }\n}\nSystem.out.println(wd);\n\nWhat is the result?`,
        options: [
          'A -1',
          'B Compilation fails.',
          'C 4',
          'D 3'
        ],
        answer: 'D',
        explanation: 'switch语句的执行流程'
      },
      {
        id: 207,
        title: 'Question 207',
        content: `Given:\n\npublic class MarkList {\n    int num;\n    public static void graceMarks(MarkList obj4){\n        obj4.num += 10;\n    }\n    public static void main(String[] args){\n        MarkList obj1 = new MarkList();\n        MarkList obj2 = obj1;\n        MarkList obj3 = null;\n        obj2.num = 60;\n        graceMarks(obj2);\n    }\n}\n\nHow many MarkList instances are created in memory at runtime?`,
        options: [
          'A 1',
          'B 4',
          'C 3',
          'D 2'
        ],
        answer: 'A',
        explanation: '只创建了一个实例'
      },
      {
        id: 208,
        title: 'Question 208',
        content: `Given:\n\npublic class Test{\n    public static void main(String[] args){\n        if (args[0].equals("Hello") ? false : true){\n            System.out.println("Success");\n        } else {\n            System.out.println("Failure");\n        }\n    }\n}\n\nAnd given the commands:\njavac Test.java\njava Test Hello\n\nWhat is the result?`,
        options: [
          'A An exception is thrown at runtime.',
          'B Success',
          'C Compilation fails.',
          'D Failure'
        ],
        answer: 'D',
        explanation: '三目运算符的结果'
      },
      {
        id: 209,
        title: 'Question 209',
        content: `Given the code fragment:\n\n7. StringBuilder sb1 = new StringBuilder("Duke");\n8. String str1 = sb1.toString();\n9. //insert code here\n10. System.out.print(str1==str2);\n\nWhich code fragment,when inserted at line 9, enables the code to print true?`,
        options: [
          'A.String str2 = sb1.toString();',
          'B.String str2 = new String(str1);',
          'C.String str2 = "Duke";',
          'D.String str2 = str1;'
        ],
        answer: 'D',
        explanation: '字符串引用比较'
      },
      {
        id: 210,
        title: 'Question 210',
        content: `Given the code fragment:\n\npublic static void main(String[] args){\n    String ta = "A";\n    ta = ta.concat("B");\n    String tb = "C";\n    ta = ta.concat(tb);\n    ta.replace('C','D');\n    ta = ta.concat(tb);\n    System.out.println(ta);\n}\n\nWhat is the result?`,
        options: [
          'A.A B D C',
          'B.A B C C',
          'C.A B C D',
          'D.A C D',
          'E.A B C'
        ],
        answer: 'B',
        explanation: '字符串操作的结果'
      },
      {
        id: 211,
        title: 'Question 211',
        content: `Given:\n\npublic class TestScope{\n    public static void main(String[] args) {\n        int var1 = 200;\n        System.out.println(doCalc(var1));\n        System.out.println(" "+var1);\n    }\n    static int doCalc(int var1){\n        var1 = var1*2;\n        return var1;\n    }\n}\n\nWhat is the result?`,
        options: [
          'A.400 200',
          'B.200 200',
          'C.400 400',
          'D.Compilation fails'
        ],
        answer: 'A',
        explanation: '方法参数是值传递，不影响原变量'
      },
      {
        id: 212,
        title: 'Question 212',
        content: `public class StringReplace{\n    public static void main(String[] args) {\n        String message = "Hi everyone!";\n        System.out.println("message = "+message.replace("e","X"));\n    }\n}\n\nWhat is the result?`,
        options: [
          'A.message = Hi everyone!',
          'B.message = Hi XvXryonX!',
          'C.A compile time error is produced',
          'D.A runtime error is produced',
          'E.message =',
          'F.message = Hi Xveryone!'
        ],
        answer: 'B',
        explanation: 'replace方法替换所有匹配字符'
      },
      {
        id: 213,
        title: 'Question 213',
        content: `Which two are benefits of polymorphism?`,
        options: [
          'A. Faster code at runtime',
          'B. More efficient code at runtime',
          'C. More dynamic code at runtime',
          'D. More flexible and reusable code',
          'E. Code that is protected from extension by other classes'
        ],
        answer: 'C,D',
        explanation: '多态的好处是更动态的代码和更灵活可重用的代码'
      },
      {
        id: 214,
        title: 'Question 214',
        content: `Given:\n\npublic class Series{\n    private boolean flag;\n    public void displaySeries(){\n        int num =2;\n        while(flag){\n            if(num % 7 == 0)\n                flag = false;\n            System.out.println(num);\n            num +=2;\n        }\n    }\n    public static void main(String[] args) {\n        new Series().displaySeries();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 2 4 6 8 10 12',
          'B. 2 4 6 8 10 12 14',
          'C. Compilation fails',
          'D. The program prints multiple of 2 infinite times',
          'E. The program prints nothing'
        ],
        answer: 'E',
        explanation: 'flag初始为false，循环不执行'
      },
      {
        id: 215,
        title: 'Question 215',
        content: `Given:\n\nTest.java\npublic class Test{\n    public static void main(String[] args){\n        Integer num = Integer.parseInt(args[1]);\n        System.out.println("Number is : " + num);\n    }\n}\n\nAnd the commands:\nJavac Test.java\nJava Test 12345\n\nWhat is the result?`,
        options: [
          'A:Number is:12345',
          'B:A NullPointerException is thrown at runtime',
          'C:A NumberFormatException is thrown at runtime',
          'D:AnArrayIndexOutOfBoundException is thrown at runtime.'
        ],
        answer: 'A',
        explanation: '参数12345被正确解析'
      },
      {
        id: 216,
        title: 'Question 216',
        content: `Given the code format:\n\nclass DBConfiguration {\n    String user;\n    String password;\n}\n\npublic class DBHandler{\n    DBConfiguration configureDB(String uname,String password){\n        // insert code here\n    }\n    public static void main(String[] args) {\n        DBHandler r = new DBHandler();\n        DBConfiguration dbConf = r.configureDB("manger", "manger");\n    }\n}\n\nWhich code fragment must be inserted at line 6 to enable the code to compile?`,
        options: [
          'A. DBConfiguration f;\nreturn f;',
          'B. return DBConfiguration;',
          'C. return new DBConfiguration;',
          'D. retutn 0;',
          'E. DBConfiguration f=new DBConfiguration(); return f;',
          'F. return new DBConfiguration();'
        ],
        answer: 'F',
        explanation: '需要返回DBConfiguration实例'
      },
      {
        id: 217,
        title: 'Question 217',
        content: `Given:\n\ninterface Pet { }\nclass Dog implements Pet { }\npublic class Beagle extends Dog{ }\n\nWhich three are valid?`,
        options: [
          'A. Pet a = new Dog();',
          'B. Pet b = new Pet();',
          'C. Dog f = new Pet();',
          'D. Dog d = new Beagle();',
          'E. Pet e = new Beagle();',
          'F. Beagle c = new Dog();'
        ],
        answer: 'A,D,E',
        explanation: '正确的多态声明'
      },
      {
        id: 218,
        title: 'Question 218',
        content: `Consider following method\n\ndefault void print(){\n}\n\nWhich statement is true?`,
        options: [
          'A. This method is invalid.',
          'B. This method can be used only in an interface.',
          'C. This method can return anything.',
          'D. This method can be used only in an interface or an abstract class.',
          'E. None of above.'
        ],
        answer: 'B',
        explanation: 'default方法只能在接口中使用'
      },
      {
        id: 219,
        title: 'Question 219',
        content: `Given:\n\npublic class SuperTest {\n    public static void main(String[] args) {\n        statement1\n        statement2\n        statement3\n    }\n}\n\nclass Shape {\n    public Shape() {\n        System.out.println("Shape: constructor");\n    }\n    public void foo() {\n        System.out.println("Shape:foo");\n    }\n}\n\nclass Square extends Shape {\n    public Square() {\n        super();\n    }\n    public Square(String lable) {\n        System.out.println("Square: constructor");\n    }\n    public void foo() {\n        super.foo();\n    }\n    public void foo(String label) {\n        System.out.println("Square:foo");\n    }\n}\n\nWhat should statement1,statement2,and statement3,be respectively,in order to produce the result?\nShape: constructor\nSquare: foo\nShape:foo`,
        options: [
          'A.Square square = new Square ("bar");\nsquare.foo("bar");\naquare.foo();',
          'B.Square square = new Square ("bar");\nsquare.foo ("bar");\nsquare.foo ("bar");',
          'C.Square square = new Square ();\nsquare.foo();\nsquare.foo(bar);',
          'D.Square square = new Square ();\nsquare.foo ();\nsquare.foo ("bar");',
          'E.Square square = new Square ();\nsquare.foo();\nsquare.foo();',
          'F.Square square = new Square();\nsquare.foo("bar");\nsquare.foo();'
        ],
        answer: 'F',
        explanation: '正确的调用顺序'
      },
      {
        id: 220,
        title: 'Question 220',
        content: `Given the code fragment:\n\nif (aVar++ < 10) {\n    System.out.println(aVar + "Hello World!");\n} else {\n    System.out.println (aVar + "Hello Universe!");\n}\n\nWhat is the result if the integer aVar is 9?`,
        options: [
          'A.10 Hello World!',
          'B.Hello Universe!',
          'C.Hello World!',
          'D.Compilation fails.'
        ],
        answer: 'A',
        explanation: '先比较后自增'
      },
      {
        id: 221,
        title: 'Question 221',
        content: `Which two statements are true about a two-dimensional array?`,
        options: [
          'A.It is implemented as an array of the specified element type.',
          'B.Using a row by column convention, each row of a two-dimensional array must be of the same size.',
          'C.At declaration time,the number of elements of the array in each dimension must be specified.',
          'D.All methods of the class Object may be invoked on the two-dimensional array.'
        ],
        answer: 'A,D',
        explanation: '二维数组特性'
      },
      {
        id: 222,
        title: 'Question 222',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) {\n        Test ts = new Test ();\n        System.out.print (isAvailable + " ");\n        isAvailable= ts.doStuff ();\n        System.out.println(isAvailable);\n    }\n    public static boolean doStuff () {\n        return !isAvailable;\n    }\n    static boolean isAvailable = false;\n}\n\nWhat is the result?`,
        options: [
          'A.true true',
          'B.true false',
          'C.false true',
          'D.false false',
          'E.Compilation fails'
        ],
        answer: 'C',
        explanation: '静态变量初始值和取反操作'
      },
      {
        id: 223,
        title: 'Question 223',
        content: `Given:\n\nclass Mid {\n    public int findMid(int n1, int n2) {\n        return (n1 + n2) / 2;\n    }\n}\n\npublic class Calc extends Mid{\n    public static void main(String[] args){\n        int n1 = 22, n2 = 2;\n        // insert code here\n        System.out.print(n3);\n    }\n}\n\nwhich two code fragments, when inserted at // insert code here, enable the code to compile and print 12?`,
        options: [
          'A. Calc c = new Calc();\nint n3 = c.findMid(n1,n2);',
          'B. int n3 = super.findMid(n1,n3);',
          'C. Calc c = new Mid();\nint n3 = c.findMid(n1, n2);',
          'D. Mid m1 = new Calc();\nint n3 = m1.findMid(n1, n2);',
          'E. int n3 = Calc.findMid(n1, n2);'
        ],
        answer: 'A,D',
        explanation: '两种正确调用方式'
      },
      {
        id: 224,
        title: 'Question 224',
        content: `Given the code fragment:\n\nLocalDate date1 = LocalDate.now();\nLocalDate date2 = LocalDate.of(2014,6,20);\nLocalDate date3 = LocalDate.parse("2014-06-20",DateTimeFormatter.ISO_DATE);\nSystem.out.println("date1 = "+date1);\nSystem.out.println("date2 = "+date2);\nSystem.out.println("date3 = "+date3);\n\nAssume that the system date is June 20, 2014. What is the result?`,
        options: [
          'A. date1 = 2014-06-20\ndate2 = 2014-06-20\ndate3 = 2014-06-20',
          'B. date1 = 6/20/14\ndate2 = 2014-06-20\ndate3 = Jun 20, 2014',
          'C. date1 = 2014-06-20\ndate2 = June 20, 2014\ndate3 = 6/20/14',
          'D. date1 = June 20, 2014\ndate2 = 2014-06-20\ndate3 = 2014-06-20'
        ],
        answer: 'A',
        explanation: '日期格式化输出'
      },
      {
        id: 225,
        title: 'Question 225',
        content: `Given:\n\nclass Alpha{\n    int ns;\n    static int s;\n    Alpha(int ns){\n        if(s<ns){\n            s= ns;\n            this.ns= ns;\n        }\n    }\n    void doprint(){\n        System.out.println("ns = "+ ns+"s= "+s);\n    }\n}\n\nclass TeatA{\n    public static void main(String[] args) {\n        Alpha ref1 = new Alpha(50);\n        Alpha ref2 = new Alpha(125);\n        Alpha ref3 = new Alpha(100);\n        ref1.doprint();\n        ref2.doprint();\n        ref3.doprint();\n    }\n}\n\nwhat is the result?`,
        options: [
          'A. ns = 50 S = 125\nns = 125 S = 125\nns = 100 S = 125',
          'B. ns = 50 S = 125\nns = 125 S = 125\nns = 0 S = 125',
          'C. ns = 50 S = 50\nns = 125 S = 125\nns = 100 S = 100',
          'D. ns = 50 S = 50\nns = 125 S = 125\nns = 0 S = 125'
        ],
        answer: 'B',
        explanation: '静态变量和实例变量的区别'
      },
      {
        id: 226,
        title: 'Question 226',
        content: `Given the code fragment:\n\npublic static void main(String[] args){\n    double discount = 0;\n    int qty = Integer.parseInt(args[0]);\n    //line n1;\n}\n\nAnd given the requirements:\n→If the value of the qty variable is greater than or equal to 90, discount = 0.5\n→If the value of the qty variable is between 80 and 90, discount = 0.2\n\nWhich two code fragments can be independently placed at line n1 to meet the requirements?`,
        options: [
          'A)if (qty >=90){discount = 0.5;}\nif (qty > 80 && qty <90){discount = 0.2;}',
          'B)discount = (qty >= 90) ? 0.5 : 0;\ndiscount = (qty > 80) ? 0.2 : 0;',
          'C)discount = (qty >=90) ? 0.5 : (qty > 80) ? 0.2 : 0;',
          'D)if (qty > 80 && qty <90){\ndiscount = 0.2;\n}else{\ndiscount = 0;\n}\nif (qty >= 90){\ndiscount = 0.5;\n}else{\ndiscount = 0;\n}',
          'E)discount = (qty > 80) ? 0.2 : (qty >= 90) ? 0.5 : 0;'
        ],
        answer: 'A,C',
        explanation: '两种满足条件的实现方式'
      },
      {
        id: 227,
        title: 'Question 227',
        content: `Given:\n\npublic class Alpha {\n    public String[] main = new String[2];\n    Alpha(String[] main) {\n        for (int ii = 0; ii < main.length; ii++) {\n            this.main[ii] = main[ii] + 5;\n        }\n    }\n    public void main(){\n        System.out.println(main[0] + main[1]);\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        Alpha main = new Alpha(args);\n        main.main();\n    }\n}\n\nAnd the commands:\njavac Test.java\njava Test 1 2\n\nWhat is the result?`,
        options: [
          'A. 1525',
          'B. 13',
          'C. Compilation fails',
          'D. An exception is thrown at runtime',
          'E. The program fails to execute due to runtime error'
        ],
        answer: 'A',
        explanation: '参数拼接后的结果'
      },
      {
        id: 228,
        title: 'Question 228',
        content: `Given:\n\npublic class X {\n    static int i;\n    int j;\n    public static void main(String[] args) {\n        X x1 = new X();\n        X x2 = new X();\n        x1.i = 3;\n        x1.j = 4;\n        x2.i = 5;\n        x2.j = 6;\n        System.out.println(x1.i + " " + x1.j + " " + x2.i + " " + x2.j);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 3 4 5 6',
          'B. 3 6 4 6',
          'C. 5 4 5 6',
          'D. 3 4 5 6'
        ],
        answer: 'C',
        explanation: '静态变量和实例变量的区别'
      },
      {
        id: 229,
        title: 'Question 229',
        content: `Given:\n\ninterface Readable{\n    public void readBook();\n    public void setBookMark();\n}\n\nabstract class Book implements Readable{ //line n1\n    public void readBook() { }\n    //line n2\n}\n\nclass EBook extends Book{ //line n3\n    public void readBook() { }\n    //line n4\n}\n\nAnd given the code fragment:\nBook book1=new EBook();\nbook1.readBook();\n\nWhich option enables the code compile?`,
        options: [
          'A) Replace the code fragment at line n1 with:\nclass Book implements Readable{',
          'B) Replace the code fragment at line n3 with:\nabstract class EBook extends Book{',
          'C) At line n2 insert:\npublic abstract void setBookMark();',
          'D) At line n4 insert:\npublic void setBookMark() { }'
        ],
        answer: 'D',
        explanation: '实现接口所有方法'
      },
      {
        id: 230,
        title: 'Question 230',
        content: `Given:\n\nclass A{\n    public void test() {\n        System.out.println("A");\n    }\n}\n\nclass B extends A{\n    public void test() {\n        System.out.println("B");\n    }\n}\n\npublic class C extends A{\n    public void test() {\n        System.out.println("C");\n    }\n    public static void main(String[] args){\n        A b1=new A();\n        A b2=new C();\n        b1=(A) b2; //line n1\n        A b3=(B) b2; //line n2\n        b1.test();\n        b3.test();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) A ClassCastException is thrown only at line n2.',
          'B) A\nC',
          'C) C\nC',
          'D) A ClassCastException is thrown only at line n1.',
          'E) A\nB'
        ],
        answer: 'A',
        explanation: '类型转换异常'
      },
      {
        id: 231,
        title: 'Question 231',
        content: `Given the code fagment:\n\nif (aVar++ < 10) {\n    System.out.println(aVar + " Hello World!");\n} else {\n    System.out.println(aVar + " Hello Universe!");\n}\n\nWhat is the result if the integer aVar is 9?`,
        options: [
          'A) 10 Hello Universe!',
          'B) Compilation fails.',
          'C) 10 Hello World!',
          'D) 9 Hello World!'
        ],
        answer: 'C',
        explanation: '先比较后自增'
      },
      {
        id: 232,
        title: 'Question 232',
        content: `Given the code fagment:\n\nint num [][] = new int [1][3];\nfor (int i = 0; i < num.length; i++) {\n    for (int j = 0; j < num[i].length; j++) {\n        num[i][j] = 10;\n    }\n}\n\nWhich option represents the of the state of the num array after successful completion ofthe outer loop?`,
        options: [
          'A) num[0][0]=10\nnum[0][1]=0\nnum[0][2]=0',
          'B) num[0][0]=10\nnum[1][0]=10\nnum[2][0]=10',
          'C) num[0][0]=10\nnum[0][1]=10\nnum[0][2]=10\nnum[0][3]=10\nnum[1][0]=0\nnum[1][1]=0\nnum[1][2]=0\nnum[1][3]=0',
          'D) num[0][0]=10\nnum[0][1]=10\nnum[0][2]=10'
        ],
        answer: 'D',
        explanation: '二维数组初始化'
      },
      {
        id: 233,
        title: 'Question 233',
        content: `Given the code fagment:\n\npublic static void main(String[] args) {\n    boolean opt = true;\n    switch (opt) {\n        case true;\n            System.out.print("True");\n            break;\n        default:\n            System.out.print("***");\n    }\n    System.out.println("Done");\n}\n\nWhich modification enables the code fragment to print TrueDone?`,
        options: [
          'A) Replace line8 with public static void main (String[] args )throws Exception{',
          'B) Replace line 5 With String result = "true"; Replace line 7 with case "true":',
          'C) Replace line 5 with boolean opt = l;\nReplace line 7 with case 1=',
          'D) At line 9, remove the break statement.',
          'E) Remove the default section.'
        ],
        answer: 'B',
        explanation: 'switch不支持boolean类型'
      },
      {
        id: 234,
        title: 'Question 234',
        content: `Given the code fagment:\n\npublic class SampleClass{\n    public static void main(String[] args) {\n        AnotherSampleClass asc = new AnotherSampleClass();\n        SampleClass sc = new SampleClass();\n        sc = asc;\n        System.out.println("sc: " + sc.getClass());\n        System.out.println("asc: " + asc.getClass());\n    }\n}\n\nclass AnotherSampleClass extends SampleClass{\n}\n\nWhat is the result?`,
        options: [
          'A. sc: class Object\nasc: class AnotherSampleClass',
          'B. sc: class SampleClass\nasc: class AnotherSampleClass',
          'C. sc: class AnotherSampleClass\nasc: class SampleClass',
          'D. sc: class AnotherSampleClass\nasc: class AnotherSampleClass'
        ],
        answer: 'D',
        explanation: 'getClass()返回实际类型'
      },
      {
        id: 235,
        title: 'Question 235',
        content: `Given:\n\npublic class Test {\n    public static final int MIN = 1;\n    public static void main(String[] args) {\n        int x = args.length;\n        if(checkLimit (x)){\n            System.out.println("Java SE");\n        }\n        else{\n            System.out.println("Java EE");\n        }\n    }\n    public static boolean checkLimit(int x) {\n        return (x >= MIN) ? true : false;\n    }\n}\n\nAnd given the commands:\njavac Test.java\njava Test\n\nWhat is the result?`,
        options: [
          'A) A NullPointerException is thrown at runtime.',
          'B) Compilation',
          'C) Java EE',
          'D) Java SE'
        ],
        answer: 'C',
        explanation: '无参数时args.length为0'
      },
      {
        id: 236,
        title: 'Question 236',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    ArrayList<Integer> points = new ArrayList<>();\n    points.add(1);\n    points.add(2);\n    points.add(3);\n    points.add(4);\n    points.add(null);\n    points.remove(2);\n    points.remove(null);\n    System.out.println(points);\n}\n\nWhat is the result?`,
        options: [
          'A)[1,3,4,null]',
          'B) A NullPointerException is thrown at runtime.',
          'C)[1,2,4]',
          'D)[1,3,4]',
          'E) Compilation fails.',
          'F)[1,2,4,null]'
        ],
        answer: 'C',
        explanation: 'ArrayList操作后的结果'
      },
      {
        id: 237,
        title: 'Question 237',
        content: `Given the code fragment:\n\npublic class Test {\n    static int count= 0;\n    int i=0;\n    public void changeCount(){\n        while(i<5){\n            i++;\n            count++;\n        }\n    }\n    public static void main (String [] args){\n        Test check1 =new Test();\n        Test check2 =new Test();\n        check1.changeCount();\n        check2.changeCount();\n        System.out.print(check1.count+":"+ check2.count);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) Compilation fails',
          'B)5:10',
          'C)10:10',
          'D)5:5'
        ],
        answer: 'C',
        explanation: '静态变量被所有实例共享'
      },
      {
        id: 238,
        title: 'Question 238',
        content: `Which statement is true about the switch statement?`,
        options: [
          'A.the break statement,at the end of each came block, is mandatory.',
          'B.It must contain the default section.',
          'C.Its case label Iiterals can be changed at runtime.',
          'D.Its expression must evaluate to a single value.'
        ],
        answer: 'D',
        explanation: 'switch表达式必须求值为单个值'
      },
      {
        id: 239,
        title: 'Question 239',
        content: `public class MyClass{\n    public static void main(string []args){\n        String s=" java Duke ";\n        int len=s.trim().length();\n        System.out.println(len);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A: Complication fails',
          'B: 11',
          'C: 8',
          'D: 9',
          'E: 10'
        ],
        answer: 'D',
        explanation: 'trim去掉首尾空格后长度为9'
      },
      {
        id: 240,
        title: 'Question 240',
        content: `Given that these files exist and are accessible:\n/sports/info.txt\n/sports/cricket/players.txt\n/sports/cricket/data/ODI.txt\n\nand given the code fragment:\nint maxDepth = 2;\nStream<Path> paths = Files.find(Paths.get("/sports"),\n    maxDepth,\n    (p,a) -> p.getFileName().toString().endsWith("txt"),\n    FileVisitOption.FOLLOW_LINKS);\nLong fCount = paths.count();\nSystem.out.println(fCount);\n\nAssuming that there are NO soft-link/symbolic links to any of the files in the directory structure,what is the result?`,
        options: [
          'A) 2',
          'B) 1',
          'C) An exception is thrown at runtime',
          'D) 3'
        ],
        answer: 'A',
        explanation: 'maxDepth=2只遍历两级目录'
      },
      {
        id: 241,
        title: 'Question 241',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    int[] stack = {10,20,30};\n    int size = 3;\n    int idx =0;\n    /* line n1 */\n    System.out.print("The Top element:" + stack[idx]);\n}\n\nWhich code fragment, inserted at line n1,prints The Top element: 30?`,
        options: [
          'A) do{ idx++; }while (idx >= size);',
          'B) do{ idx++; }while (idx <= size);',
          'C) while (idx <= size - 1){ idx++; }',
          'D) while(idx < size);{ idx++; }',
          'E) do{ idx++; }while(idx < size - 1);'
        ],
        answer: 'E',
        explanation: 'do-while循环使idx指向最后一个元素'
      },
      {
        id: 242,
        title: 'Question 242',
        content: `Which three statements are true about exception handling?`,
        options: [
          'A) Only unchecked exceptions can be rethrown.',
          'B) All subclasses of the Exception class except the RuntimeException class are checked exceptions.',
          'C) All subclasses of the Error class are checked exceptions and are recoverable.',
          'D) The parameter in a catch block is of Throwable type.',
          'E) All subclasses of the RuntimeException class must be caught or declared to be thrown.',
          'F) All subclasses of the RuntimeException class are recoverable.'
        ],
        answer: 'A,D,F',
        explanation: '关于异常处理的正确描述'
      },
      {
        id: 243,
        title: 'Question 243',
        content: `Given:\n\npublic static void main (String[] args){\n    LocalDate date=LocalDate.of(2012,01,32);\n    date.plusDays(10);\n    System.out.println(date);\n}\n\nWhat is the result?`,
        options: [
          'A) 2012-02-10',
          'B) Compilation fails',
          'C) 2012-02-11',
          'D) A DateTimeException is thrown at runtime'
        ],
        answer: 'D',
        explanation: '无效日期导致DateTimeException'
      },
      {
        id: 244,
        title: 'Question 244',
        content: `Given:\n\npublic static void main (String[] args){\n    int x=5;\n    while(isAvailable(x)){\n        System.out.println(x);\n    }\n}\npublic static boolean isAvailable(int x){\n    return x-->0?true:false;\n}\n\nwhich modification enables the code to print 54321?`,
        options: [
          'A) replace line 12 with return(x>0)?false:true;',
          'B) replace line 6 with System.out.println(--x);',
          'C) At line 7,insert x--;',
          'D) replace line 6 with --x;and,at line 7,insert System.out.println(x);'
        ],
        answer: 'C',
        explanation: '在循环内递减x值'
      },
      {
        id: 245,
        title: 'Question 245',
        content: `Given:\n\npublic class Test {\n    public static void main(String[] args) {\n        List ps = new ArrayList();\n        Patient p2 = new Patient("Mike");\n        ps.add(p2);\n        //insert code here\n        if(f>=0){\n            System.out.println("Mike Found");\n        }\n    }\n}\nclass Patient {\n    String name;\n    public Patient(String name) {\n        this.name = name;\n    }\n}\n\nWhich code fragment,when inserted at line 14,enables the code to print Mike Found?`,
        options: [
          'A) int f = ps.indexOf(Patient("Mike"));',
          'B) Patient p = new Patient("Mike"); int f = ps.indexOf(Patient(p));',
          'C) int f = ps.indexOf(p2);',
          'D) int f = ps.indexOf(new Patient("Mike"));'
        ],
        answer: 'C',
        explanation: '查找列表中已有的对象'
      },
      {
        id: 246,
        title: 'Question 246',
        content: `Given:\n\npublic class Demo {\n    public static void main(String[] args) {\n        String[] arr = {"A","B","C","D"};\n        for (int i = 0;i<arr.length;i++){\n            System.out.print(arr[i]+" ");\n            if(arr[i].equals("C")){\n                continue;\n            }\n            System.out.println("Work done");\n            break;\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) A B C D Work done',
          'B) A Work done',
          'C) Compilation fails',
          'D) A B C Work done'
        ],
        answer: 'B',
        explanation: '第一次循环输出A Work done后break'
      },
      {
        id: 247,
        title: 'Question 247',
        content: `Given the code fragments:\n\nPerson.java:\npublic class Person {\n    String name;\n    int age;\n    public Person(String n,int a) {\n        name = n;\n        age = a;\n    }\n    public String getName() {\n        return name;\n    }\n    public int getAge() {\n        return age;\n    }\n}\n\nTest.java:\npublic static void checkAge(List<Person> list,Predicate<Person> predicate) {\n    for(Person p : list) {\n        if(predicate.test(p)) {\n            System.out.println(p.name + " ");\n        }\n    }\n}\npublic static void main(String[] args) {\n    List<Person> iList = Arrays.asList(new Person("Hank",45),\n        new Person("Charlie",40),\n        new Person("Smith",38));\n    //line n1\n}\n\nWhich code fragment,when insert at line n1,enables the code to print Hank?`,
        options: [
          'A) checkAge(iList, (Person p)->{p.getAge() > 40;});',
          'B) checkAge(iList, Person p -> p.getAge() > 40);',
          'C) checkAge(iList, () -> p.getAge() > 40);',
          'D) checkAge(iList, p -> p.getAge() > 40);'
        ],
        answer: 'D',
        explanation: '使用lambda表达式筛选年龄大于40的人'
      },
      {
        id: 248,
        title: 'Question 248',
        content: `Given:\n\npublic class App{\n    String myStr = "7007";\n    public void doStuff(String str) {\n        int myNum= 0;\n        try{\n            String myStr = str;\n            myNum = Integer.parseInt(myStr);\n        }catch (NumberFormatException ne){\n            System.err.println("Error");\n        }\n        System.out.println("myStr: " + myStr + ", myNum: " + myNum);\n    }\n    public static void main(String[] args){\n        App obj = new App();\n        obj.doStuff("9009");\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) myStr: 9009, myNum: 9009',
          'B) myStr: 7007, myNum: 7007',
          'C) myStr: 7007, myNum: 9009',
          'D) Compilation fails.'
        ],
        answer: 'C',
        explanation: '局部变量不影响成员变量'
      },
      {
        id: 249,
        title: 'Question 249',
        content: `Given:\n\nclass Equal{\n    public static void main(String[] args){\n        String str1 ="Java";\n        String[] str2 = {"J", "a", "v", "a"};\n        String str3 = "";\n        for(String str : str2){\n            str3 = str3+str;\n        }\n        boolean b1 = (str1 == str3);\n        boolean b2 = (str1.equals(str3));\n        System.out.print(b1+","+b2);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) false, true',
          'B) false, false',
          'C) true, true',
          'D) true, false'
        ],
        answer: 'A',
        explanation: '==比较引用，equals比较内容'
      },
      {
        id: 250,
        title: 'Question 250',
        content: `Given the following array:\n\nint[] intArr={8,16,32,64,128};\n\nwhich two code fragment,independently,print each element in this array?`,
        options: [
          'A) for(int i:intArr){ System.out.print(intArr[i]+" "); }',
          'B) for(int i:intArr){ System.out.print(i+" "); }',
          'C) for(int i=0;i<intArr.length;i++){ System.out.print(intArr[i]+" "); }',
          'D) for(int i=0;intArr){ System.out.print(intArr[i]+" "); }',
          'E) for(int i=0;i<intArr.length;i++){ System.out.print(i+" "); }',
          'F) for(int i;i<intArr.length;i++){ System.out.print(intArr[i]+" "); }'
        ],
        answer: 'B,C',
        explanation: '两种正确遍历数组的方式'
      },
      {
        id: 251,
        title: 'Question 251',
        content: `Given the code fragment:\n\npublic class Test{\n    public static void main(String[] args){\n        //line n1\n        switch(x){\n            case 1;\n                System.out.println("One");\n                break;\n            case 2;\n                System.out.println("Two");\n                break;\n        }\n    }\n}\n\nwhich three code fragments can be independently inserted at n1 to enable the code to print One?`,
        options: [
          'A) Integer x=new Integer("1");',
          'B) long x=1;',
          'C) byte x=1;',
          'D) short x=1;',
          'E) double x=1;',
          'F) String x="1";'
        ],
        answer: 'A,C,D',
        explanation: 'switch支持的类型'
      },
      {
        id: 252,
        title: 'Question 252',
        content: `Given:\n\nclass X{\n    static int i;\n    int j;\n    public static void main(String[] args){\n        X x1=new X();\n        X x2=new X();\n        x1.i=3;\n        x1.j=4;\n        x2.i=5;\n        x2.j=6;\n        System.out.println(x1.i+" "+x1.j+" "+x2.i+" "+x2.j);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) 3 4 3 6',
          'B) 3 6 4 6',
          'C) 5 4 5 6',
          'D) 3 4 5 6'
        ],
        answer: 'C',
        explanation: '静态变量被所有实例共享'
      },
      {
        id: 253,
        title: 'Question 253',
        content: `Given:\n\ninterface Readable{\n    public void readBook();\n    public void setBookMark();\n}\nabstract class Book implements Readable{ //line n1\n    public void readBook() { }\n    //line n2\n}\nclass EBook extends Book{ //line n3\n    public void readBook() { }\n    //line n4\n}\n\nAnd given the code fragment:\nBook book1=new EBook();\nbook1.readBook();\n\nWhich option enables the code compile?`,
        options: [
          'A) Replace the code fragment at line n1 with: class Book implements Readable{',
          'B) Replace the code fragment at line n3 with: abstract class EBook extends Book{',
          'C) At line n2 insert: public abstract void setBookMark();',
          'D) At line n4 insert: public void setBookMark() { }'
        ],
        answer: 'D',
        explanation: '实现接口所有方法'
      },
      {
        id: 254,
        title: 'Question 254',
        content: `Given:\n\nclass A{\n    public void test() {\n        System.out.println("A");\n    }\n}\nclass B extends A{\n    public void test() {\n        System.out.println("B");\n    }\n}\npublic class C extends A{\n    public void test() {\n        System.out.println("C");\n    }\n    public static void main(String[] args){\n        A b1=new A();\n        A b2=new C();\n        b1=(A) b2; //line n1\n        A b3=(B) b2; //line n2\n        b1.test();\n        b3.test();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) A ClassCastException is thrown only at line n2.',
          'B) A C',
          'C) C C',
          'D) A ClassCastException is thrown only at line n1.',
          'E) A B'
        ],
        answer: 'A',
        explanation: '类型转换异常'
      },
      {
        id: 255,
        title: 'Question 255',
        content: `Given the code fragment:\n\nif (aVar++ < 10) {\n    System.out.println(aVar + " Hello World!");\n} else {\n    System.out.println(aVar + " Hello Universe!");\n}\n\nWhat is the result if the integer aVar is 9?`,
        options: [
          'A) 10 Hello Universe!',
          'B) Compilation fails.',
          'C) 10 Hello World!',
          'D) 9 Hello World!'
        ],
        answer: 'C',
        explanation: '先比较后递增'
      },
      {
        id: 256,
        title: 'Question 256',
        content: `Given the code fragment:\n\nint num [][] = new int [1][3];\nfor (int i = 0; i < num.length; i++) {\n    for (int j = 0; j < num[i].length; j++) {\n        num[i][j] = 10;\n    }\n}\n\nWhich option represents the of the state of the num array after successful completion ofthe outer loop?`,
        options: [
          'A) num[0][0] = 10\nnum[0][1] = 0\nnum[0][2] = 0',
          'B) num[0][0] = 10\nnum[1][0] = 10\nnum[2][0] = 10',
          'C) num[0][0] = 10\nnum[0][1] = 10\nnum[0][2] = 10\nnum[0][3] = 10\nnum[1][0] = 0\nnum[1][1] = 0\nnum[1][2] = 0\nnum[1][3] = 0',
          'D) num[0][0] = 10\nnum[0][1] = 10\nnum[0][2] = 10'
        ],
        answer: 'D',
        explanation: '二维数组初始化'
      },
      {
        id: 257,
        title: 'Question 257',
        content: `Given the code fragment:\n\n4. public static void main(String[] args){\n5.     boolean opt = true;\n6.     switch (opt) {\n7.         case true:\n8.             System.out.print("True");\n9.             break;\n10.        default:\n11.            System.out.print("***");\n12.    }\n13.    System.out.println("Done");\n14. }\n\nWhich modification enables the code fragment to print TrueDone?`,
        options: [
          'A) At line 9,remove the break statement.',
          'B) Replace line 5 with String opt = "true";\nReplace line 7 with case "true";',
          'C) Replace line 5 with boolean opt = 1;\nReplace line 7 with case 1;',
          'D) Remove the default section.'
        ],
        answer: 'B',
        explanation: 'switch不支持boolean类型'
      },
      {
        id: 258,
        title: 'Question 258',
        content: `Given\n\nclass C2 {\n    Public void displayC2() {\n        System.out.print("C2");\n    }\n}\n\ninterface I {\n    public void displayI();\n}\n\nclass C1 extends C2 implements I {\n    public void displayI() {\n        System.out.print("C1");\n    }\n}\n\nAnd given the code fragment:\n\nC2 obj1 = new C1();\nI obj2 = new C1();\nC2 s = obj2;\nI t = obj1;\nt.displayI();\ns.displayC2();\n\nWhat is the result?`,
        options: [
          'A) Compilation fails.',
          'B) C1C1',
          'C) C2C2',
          'D) C1C2'
        ],
        answer: 'A',
        explanation: '类型转换错误'
      },
      {
        id: 259,
        title: 'Question 259',
        content: `Given:\n\npublic class Test {\n    public static final int MIN = 1;\n    public static void main(String[] args) {\n        int x = args.length;\n        if(checkLimit (x)){\n            System.out.println("Java SE");\n        }\n        else{\n            System.out.println("Java EE");\n        }\n    }\n    public static boolean checkLimit(int x) {\n        return (x >= MIN) ? true : false;\n    }\n}\n\nAnd given the commands:\n\njavac Test.java\njava Test\n\nWhat is the result?`,
        options: [
          'A) A NullPointerException is thrown at runtime.',
          'B) Compilation',
          'C) Java EE',
          'D) Java SE'
        ],
        answer: 'C',
        explanation: 'args.length为0'
      },
      {
        id: 260,
        title: 'Question 260',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    ArrayList<Integer> points = new ArrayList<>();\n    points.add(1);\n    points.add(2);\n    points.add(3);\n    points.add(4);\n    points.add(null);\n    points.remove(2);\n    points.remove(null);\n    System.out.println(points);\n}\n\nWhat is the result?`,
        options: [
          'A) [1,3,4,null]',
          'B) A NullPointerException is thrown at runtime.',
          'C) [1,2,4]',
          'D) [1,3,4]',
          'E) Compilation fails.',
          'F) [1,2,4,null]'
        ],
        answer: 'D',
        explanation: 'ArrayList操作后的结果'
      },
      {
        id: 261,
        title: 'Question 261',
        content: `Given the code fragment:\n\npublic class Test {\n    static int count= 0;\n    int i=0;\n    public void changeCount(){\n        while(i<5){\n            i++;\n            count++;\n        }\n    }\n    public static void main (String [] args){\n        Test check1 =new Test();\n        Test check2 =new Test();\n        check1.changeCount();\n        check2.changeCount();\n        System.out.print(check1.count+":"+ check2.count);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) Compilation fails',
          'B) 5:10',
          'C) 10:10',
          'D) 5:5'
        ],
        answer: 'C',
        explanation: '静态变量被所有实例共享'
      },
      {
        id: 262,
        title: 'Question 262',
        content: `Which statement is true about the switch statement?`,
        options: [
          'A. The break statement,at the end of each case block, is mandatory.',
          'B. It must contain the default section.',
          'C. Its case label literals can be changed at runtime.',
          'D. Its expression must evaluate to a single value.'
        ],
        answer: 'D',
        explanation: 'switch语句的基本特性'
      },
      {
        id: 263,
        title: 'Question 263',
        content: `Given:\n\npublic class MyClass{\n    public static void main(string []args){\n        String s=" java Duke ";\n        int len=s.trim().length();\n        System.out.println(len);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A: Complication fails',
          'B: 11',
          'C: 8',
          'D: 9',
          'E: 10'
        ],
        answer: 'D',
        explanation: 'trim去掉首尾空格后的长度'
      },
      {
        id: 264,
        title: 'Question 264',
        content: `Given the definitions of the MyString class and the Test class:\n\nMyString.java:\npackage p1;\nclass MyString{\n    String msg;\n    MyString (String msg){\n        this.msg=msg\n    }\n}\n\nTest.java:\npackage p1;\npublic class Test{\n    public static void main(String [] args){\n        System.out.println("Hello"+new StringBuilder("java se.8"));\n        System.out.println("Hello"+new MyString("java se.8"));\n    }\n}\n\nWhat is the result?`,
        options: [
          'A: Hello Java SE 8\nHello p1.MyString@<<hashcodes>>',
          'B: Hello Java SE 8\nHello Java SE 8',
          'C: Hello java.lang.StringBuilder@<<hashcode1>>\nHello p1.MyString@<<hashcode2>>',
          'D: Complication fails at the Test class'
        ],
        answer: 'A',
        explanation: 'toString()方法默认输出'
      },
      {
        id: 265,
        title: 'Question 265',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    int data[] = {2010,2013,2014,2015,2014};\n    int key = 2014;\n    int count = 0;\n    for ( int e:data) {\n        if(e!=key) {\n            continue;\n            count++;\n        }\n    }\n    System.out.print(count + " Found");\n}\n\nWhat is the result?`,
        options: [
          'A) 1 Found',
          'B) Compilation fails',
          'C) 0 Found',
          'D) 3 Found'
        ],
        answer: 'B',
        explanation: 'count++在continue后不可达'
      },
      {
        id: 266,
        title: 'Question 266',
        content: `Given the following segment of code:\n\nArrayList<Vehicle> myList = new ArrayList<>();\nmyList.add(new MotorCycle());\n\nWhich two statements, if either were true,would make the code compile?`,
        options: [
          'A) MotorCycle is an interface that implements the Vehicle class.',
          'B) Vehicle and MotorCycle both extend the Transportation superclass.',
          'C) Vehicle is an interface that is implemented by the Motorcycle class.',
          'D) Vehicle is a superclass of MotorCycle',
          'E) MotorCycle is a superclass of Vehicle.',
          'F) Vehicle and MotorCycle both implement the Transportation interface.'
        ],
        answer: 'C,D',
        explanation: '类继承关系'
      },
      {
        id: 267,
        title: 'Question 267',
        content: `Given:\n\nabstract class Planet {\n    protected void revolve() { //line n1\n    }\n    abstract void rotate(); //line n2\n}\nclass Earth extends Planet{\n    void revolve() { //line n3\n    }\n    protected void rotate() { //line n4\n    }\n}\n\nWhich two modifications, made independently, enable the code to compile?`,
        options: [
          'A) Make the method at line n2 public',
          'B) Make the method at line n1 public',
          'C) Make the method at line n3 public',
          'D) Make the method at line n4 public',
          'E) Make the method at line n3 protected'
        ],
        answer: 'C,E',
        explanation: '方法重写的访问修饰符规则'
      },
      {
        id: 268,
        title: 'Question 268',
        content: `You are asked to create a method that accepts an array of integers and returns the highest value from that array.\n\nGiven the code fragment：\n\npublic class Test {\n    public static void main(String[] args) {\n        int numbers[] = {12,13,42,31,15,156,23,51,12};\n        int max = findMax(numbers);\n    }\n    /* line n1 */{\n        int max = 0;\n        /* code goes here */\n        return max;\n    }\n}\n\nWhich method signature do you use at line n1?`,
        options: [
          'A) final int findMax(int[])',
          'B) static int[] findMax(int max)',
          'C) public int findMax(int[] numbers)',
          'D) static int findMax(int[] numbers)'
        ],
        answer: 'D',
        explanation: '静态方法调用'
      },
      {
        id: 269,
        title: 'Question 269',
        content: `Given the code fragment:\n\nString shirts[][]=new String[2][2];\nshirts[0][0]="red";\nshirts[0][1]="blue";\nshirts[1][0]="small";\nshirts[1][1]="medium";\n\nWhich code fragment prints red:blue:small:medium:?`,
        options: [
          'A) for (int index=0; index<2;++index){\n    for (int idx=0; idx<index;++idx){\n        System.out.print(shirts[index][idx]+":");\n    }\n}',
          'B) for (int index=1; index<2; index++){\n    for (int idx=1; idx<2; idx++){\n        System.out.print(shirts[index][idx]+":");\n    }\n}',
          'C) for (String c: colors){\n    for (String s: sizes){\n        System.out.print(s+":");\n    }\n}',
          'D) for (int index=0; index<2;){\n    for (int idx=0; idx<2;){\n        System.out.print(shirts[index][idx]+":");\n        idx++;\n    }\n    index++;\n}'
        ],
        answer: 'D',
        explanation: '正确遍历二维数组'
      },
      {
        id: 270,
        title: 'Question 270',
        content: `Given:\n\npublic class Triangle{\n    static double area;\n    int b = 2 , h = 3;\n    public static void main(String[] args){\n        double p, b, h; //line n1\n        if(area == 0){\n            b = 3;\n            h = 4;\n            p = 0.5;\n        }\n        area = p * b * h; //line n2\n        System.out.println("Area is " + area);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) Compilation fails at line n2.',
          'B) Compilation fails at line n1.',
          'C) Area is 6.0',
          'D) Area is 6.0'
        ],
        answer: 'A',
        explanation: '变量p可能未初始化'
      },
      {
        id: 271,
        title: 'Question 271',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    StringBuilder sb1 = new StringBuilder("Duke");\n    String str1 = sb1.toString();\n    //insert code here\n    System.out.print(str1 == str2);\n}\n\nWhich code fragment,when inserted at line 9, enables the code to print true?`,
        options: [
          'A. String str2 = str1;',
          'B. String str2 = new String(str1);',
          'C. String str2 = sb1.toString();',
          'D. String str2 = "Duke";'
        ],
        answer: 'A',
        explanation: '直接赋值引用相同'
      },
      {
        id: 272,
        title: 'Question 272',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n    String ta = "A";\n    ta = ta.concat("B");\n    String tb = "C";\n    ta = ta.concat(tb);\n    ta.replace('C','D');\n    ta = ta.concat(tb);\n    System.out.println(ta);\n}\n\nWhat is the result?`,
        options: [
          'A. A B D C',
          'B. A B C C',
          'C. A B C D',
          'D. A C D',
          'E. A B C'
        ],
        answer: 'B',
        explanation: '字符串操作后的结果'
      },
      {
        id: 273,
        title: 'Question 273',
        content: `Given:\n\nclass Animal{\n    String type = "Canine";\n    int maxSpeed = 60;\n    Animal(){}\n    Animal(String type,int maxSpeed){\n        this.type=type;\n        this.maxSpeed=maxSpeed;\n    }\n}\n\nclass WildAnimal extends Animal{\n    String bounds;\n    WildAnimal(String bounds){\n        //line n1\n        super();\n        this.bounds=bounds;\n    }\n    WildAnimal(String type, int maxSpeed, String bounds){\n        //line n2\n        super(type,maxSpeed);\n        this.bounds=bounds;\n    }\n}\n\nAnd Given the code fragment:\n\nWildAnimal wolf = new WildAnimal("Long");\nWildAnimal tiger = new WildAnimal("Feline",80,"short");\nSystem.out.println(wolf.type+" "+wolf.maxSpeed+" "+wolf.bounds);\nSystem.out.println(tiger.type+" "+tiger.maxSpeed+" "+tiger.bounds);\n\nWhich two modifications enable the code to print the following output?\nCanine 60 Long\nFeline 80 short`,
        options: [
          'A. Replace line n2 with:\nsuper(type,maxSpeed);\nthis.bounds = bounds;',
          'B. Replace line n1 with:\nthis.bounds = bounds;\nsuper();',
          'C. Replace line n1 with:\nthis("Canine",60);\nthis.bounds = bounds;',
          'D. Replace line n2 with:\nsuper(type,maxSpeed);\nthis(bounds);',
          'E. Replace line n1 with:\nsuper();\nthis.bounds = bounds;'
        ],
        answer: 'A,E',
        explanation: '正确初始化父类和子类属性'
      },
      {
        id: 274,
        title: 'Question 274',
        content: `Given:\n\npublic class Test{\n    public static void main(String[] args){\n        boolean a=new Boolean(Boolean.valueOf(args[0]));\n        boolean b=new Boolean(args[1]);\n        System.out.println(a+" "+b);\n    }\n}\n\nAnd given the commands:\n\njavac Test.java\njava Test TRUE null\n\nWhat is the result?`,
        options: [
          'A) TRUE null',
          'B) A ClassCastException is thrown at runtime',
          'C) true true',
          'D) false false',
          'E) true false'
        ],
        answer: 'E',
        explanation: 'Boolean转换规则'
      },
      {
        id: 275,
        title: 'Question 275',
        content: `Given:\n\npublic class Test{\n    public static void main(String[] args){\n        Test ts=new Test();\n        System.out.print(isAvailable+" ");\n        isAvailable=ts.doStuff();\n        System.out.println(isAvailable);\n    }\n    public static boolean doStuff(){\n        return !isAvailable;\n    }\n    static boolean isAvailable=false;\n}\n\nWhat is the result?`,
        options: [
          'A) false true',
          'B) false false',
          'C) true false',
          'D) Compilation fails',
          'E) true true'
        ],
        answer: 'B',
        explanation: '静态变量操作结果'
      },
      {
        id: 276,
        title: 'Question 276',
        content: `Given the following two classes:\n\npublic class Customer{\n    ElectricAccount acct = new ElectricAccount();\n    public void useElectricity(double kWh){\n        acct.addKWh(kWh);\n    }\n}\n\npublic class ElectricAccount{\n    private double kWh;\n    private double rate =0.07;\n    private double bill;\n    //line n1\n}\n\nHow should you write methods in the ElectricAccount class at line n1 so that member variable bill is always equal to the value of the member variable kWh multiplied by the member variable rate?`,
        options: [
          'A) private void addKWh(double kWh){\n    if(kWh > 0){\n        this.kWh += kWh;\n        this.bill = this.kWh*this.rate;\n    }\n}',
          'B) public void addKWh(double kWh){\n    this.kWh += kWh;\n    this.bill=this.kWh*this.rate;\n}',
          'C) public void addKWh(double kWh){\n    if(kWh > 0){\n        this.kWh += kWh;\n        this.bill = this.kWh * this.rate;\n    }\n}',
          'D) public void addKWh(double kWh){\n    if(kWh > 0){\n        this.kWh += kWh;\n        setBill(this.kWh);\n    }\n}\npublic void setBill(double kWh){\n    bill=kWh*rate;\n}'
        ],
        answer: 'C',
        explanation: '正确计算电费的方法'
      },
      {
        id: 277,
        title: 'Question 277',
        content: `Given the code fragment:\n\npublic static void main (String[] args) {\n    int[] stack = {10,20,30};\n    int size = 3;\n    int idx =0;\n    /* line n1 */\n    System.out.print("The Top element:" + stack[idx]);\n}\n\nWhich code fragment, inserted at line n1,prints The Top element: 30?`,
        options: [
          'A) do{\n    idx++;\n} while (idx >= size);',
          'B) do{\n    idx++;\n} while (idx <= size);',
          'C) while (idx <= size - 1){\n    idx++;\n}',
          'D) while(idx < size);{\n    idx++;\n}',
          'E) do{\n    idx++;\n} while(idx < size - 1);'
        ],
        answer: 'E',
        explanation: '正确遍历数组到最后一个元素'
      },
      {
        id: 278,
        title: 'Question 278',
        content: `Which three statements are true about exception handling?`,
        options: [
          'A) Only unchecked exceptions can be rethrown.',
          'B) All subclasses of the Exception class except the RuntimeException class are checked exceptions.',
          'C) All subclasses of the Error class are checked exceptions and are recoverable.',
          'D) The parameter in a catch block is of Throwable type.',
          'E) All subclasses of the RuntimeException class must be caught or declared to be thrown.',
          'F) All subclasses of the RuntimeException class are recoverable.'
        ],
        answer: 'A,D,F',
        explanation: '异常处理的基本规则'
      },
      {
        id: 279,
        title: 'Question 279',
        content: `public static void main (String[] args){\n    LocalDate date=LocalDate.of(2012,01,32);\n    date.plusDays(10);\n    System.out.println(date);\n}\n\nWhat is the result?`,
        options: [
          'A) 2012-02-10',
          'B) Compilation fails',
          'C) 2012-02-11',
          'D) A DateTimeException is thrown at runtime'
        ],
        answer: 'D',
        explanation: '无效日期抛出异常'
      },
      {
        id: 280,
        title: 'Question 280',
        content: `public static void main (String[] args){\n    int x=5;\n    while(isAvailable(x)){\n        System.out.println(x);\n    }\n}\npublic static boolean isAvailable(int x){\n    return x-->0?true:false;\n}\n\nwhich modification enables the code to print 54321?`,
        options: [
          'A) replace line 12 with return(x>0)?false:true;',
          'B) replace line 6 with System.out.println(--x);',
          'C) At line 7, insert x--;',
          'D) replace line 6 with --x; and, at line 7, insert System.out.println(x);'
        ],
        answer: 'C',
        explanation: '正确修改递减逻辑'
      },
      {
        id: 281,
        title: 'Question 281',
        content: `public class Test {\n    public static void main(String[] args) {\n        List ps = new ArrayList();\n        Patient p2 = new Patient("Mike");\n        ps.add(p2);\n        //insert code here\n        if(f>=0){\n            System.out.println("Mike Found");\n        }\n    }\n}\n\nclass Patient {\n    String name;\n    public Patient(String name) {\n        this.name = name;\n    }\n}\n\nWhich code fragment,when inserted at line 14,enables the code to print Mike Found?`,
        options: [
          'A) int f = ps.indexOf(Patient("Mike"));',
          'B) Patient p = new Patient("Mike");\nint f = ps.indexOf(Patient(p));',
          'C) int f = ps.indexOf(p2);',
          'D) int f = ps.indexOf(new Patient("Mike"));'
        ],
        answer: 'C',
        explanation: '正确查找列表中已有对象'
      },
      {
        id: 282,
        title: 'Question 282',
        content: `public class Demo {\n    public static void main(String[] args) {\n        String[] arr = {"A","B","C","D"};\n        for (int i = 0;i<arr.length;i++){\n            System.out.println(arr[i]+"");\n            if(arr[i].equals("C")){\n                continue;\n            }\n            System.out.println("Work done");\n            break;\n        }\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) A B C D Work done',
          'B) A Work done',
          'C) Compilation fails',
          'D) A B C Work done'
        ],
        answer: 'B',
        explanation: '循环控制流程'
      },
      {
        id: 283,
        title: 'Question 283',
        content: `Given the code fragments:\n\nPerson.java:\npublic class Person {\n    String name;\n    int age;\n    public Person(String n,int a) {\n        name = n;\n        age = a;\n    }\n    public String getName() {\n        return name;\n    }\n    public int getAge() {\n        return age;\n    }\n}\n\nTest.java:\npublic static void checkAge(List<Person> list,Predicate<Person> predicate) {\n    for(Person p : list) {\n        if(predicate.test(p)) {\n            System.out.println(p.name + " ");\n        }\n    }\n}\npublic static void main(String[] args) {\n    List<Person> iList = Arrays.asList(new Person("Hank",45),\n        new Person("Charlie",40),\n        new Person("Smith",38));\n    //line n1\n}\n\nWhich code fragment,when insert at line n1, enables the code to print Hank?`,
        options: [
          'A. checkAge(iList , (Person p)->{p.getAge() > 40;} );',
          'B. checkAge(iList , Person p -> p.getAge() > 40 );',
          'C. checkAge(iList , () -> p.getAge() > 40 );',
          'D. checkAge(iList , p -> p.getAge() > 40 );'
        ],
        answer: 'D',
        explanation: '正确使用Lambda表达式筛选'
      },
      {
        id: 284,
        title: 'Question 284',
        content: `Given:\n\npublic class App{\n    String myStr = "7007";\n    public void doStuff(String str) {\n        int myNum= 0;\n        try{\n            String myStr = str;\n            myNum = Integer.parseInt(myStr);\n        }catch (NumberFormatException ne){\n            System.err.println("Error");\n        }\n        System.out.println(\n            "myStr: " + myStr + ", myNum: " + myNum);\n    }\n    public static void main(String[] args){\n        App obj = new App();\n        obj.doStuff("9009");\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. myStr: 9009, myNum: 9009',
          'B. myStr: 7007, myNum: 7007',
          'C. myStr: 7007, myNum: 9009',
          'D. Compilation fails.'
        ],
        answer: 'C',
        explanation: '变量作用域问题'
      },
      {
        id: 285,
        title: 'Question 285',
        content: `Given:\n\nclass Equal{\n    public static void main(String[] args){\n        String str1 ="Java";\n        String[] str2 = {"J", "a", "v", "a"};\n        String str3 = "";\n        for(String str : str2){\n            str3 = str3+str;\n        }\n        boolean b1 = (str1 == str3);\n        boolean b2 = (str1.equals(str3));\n        System.out.print(b1+","+b2);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) false, true',
          'B) false, false',
          'C) true, true',
          'D) true, false'
        ],
        answer: 'A',
        explanation: '字符串比较规则'
      },
      {
        id: 286,
        title: 'Question 286',
        content: `Given the following array:\n\nint[] intArr={8,16,32,64,128};\n\nwhich two code fragment,independently,print each element in this array?`,
        options: [
          'A for(int:intArr){\n    System.out.print(intArr[i]+"");\n}',
          'B for{int:intArr}{\n    System.out.print(i+"");\n}',
          'C for (int i=0；i<intArr.length;i++){\n    System.out.print(intArr[i]+"");\n}',
          'D for(int i=0;intArr){\n    System.out.print(intArr[i]+"");\n}',
          'E for(int i=0;i<intArr.length;i++){\n    System.out.print(i+"");\n}',
          'F for(int i;i<intArr.length;i++){\n    System.out.print(intArr[i]+"");\n}'
        ],
        answer: 'B,C',
        explanation: '两种正确遍历数组的方式'
      },
      {
        id: 287,
        title: 'Question 287',
        content: `Given the code fragment:\n\npublic class Test{\n    public static void main(String[] args){\n        //line n1\n        switch(x){\n            case 1;\n                System.out.println("One");\n                break;\n            case 2;\n                System.out.println("Two");\n                break;\n        }\n    }\n}\n\nwhich three code fragments can be independently inserted at n1 to enable the code to print One?`,
        options: [
          'A Integer x=new Integer("1");',
          'B long x=1;',
          'C byte x=1;',
          'D short x=1;',
          'E double x=1;',
          'F String x="1";'
        ],
        answer: 'A,C,D',
        explanation: 'switch支持的类型'
      },
      {
        id: 288,
        title: 'Question 288',
        content: `Given:\n\nclass X{\n    static int i;\n    int j;\n    public static void main(String[] args){\n        X x1=new X();\n        X x2=new X();\n        x1.i=3;\n        x1.j=4;\n        x2.i=5;\n        x2.j=6;\n        System.out.println(\n            x1.i+" "+\n            x1.j+" "+\n            x2.i+" "+\n            x2.j);\n    }\n}\n\nWhat is the result`,
        options: [
          'A) 3 4 3 6',
          'B) 3 6 4 6',
          'C) 5 4 5 6',
          'D) 3 4 5 6'
        ],
        answer: 'C',
        explanation: '静态变量与实例变量的区别'
      },
      {
        id: 289,
        title: 'Question 289',
        content: `Given:\n\ninterface Readable{\n    public void readBook();\n    public void setBookMark();\n}\n\nabstract class Book implements Readable{ //line n1\n    public void readBook() { }\n    //line n2\n}\n\nclass EBook extends Book{ //line n3\n    public void readBook() { }\n    //line n4\n}\n\nAnd given the code fragment:\n\nBook book1=new EBook();\nbook1.readBook();\n\nWhich option enables the code compile?`,
        options: [
          'A) Replace the code fragment at line n1 with:\nclass Book implements Readable{',
          'B) Replace the code fragment at line n3 with:\nabstract class EBook extends Book{',
          'C) At line n2 insert:\npublic abstract void setBookMark();',
          'D) At line n4 insert:\npublic void setBookMark() { }'
        ],
        answer: 'D',
        explanation: '正确实现接口方法'
      },
      {
        id: 290,
        title: 'Question 290',
        content: `Given:\n\nclass A{\n    public void test() {\n        System.out.println("A");\n    }\n}\n\nclass B extends A{\n    public void test() {\n        System.out.println("B");\n    }\n}\n\npublic class C extends A{\n    public void test() {\n        System.out.println("C");\n    }\n    public static void main(String[] args){\n        A b1=new A();\n        A b2=new C();\n        b1=(A) b2; //line n1\n        A b3=(B) b2; //line n2\n        b1.test();\n        b3.test();\n    }\n}\n\nWhat is the result?`,
        options: [
          'A) A ClassCastException is thrown only at line n2.',
          'B) A\nC',
          'C) C\nC',
          'D) A ClassCastException is thrown only at line n1.',
          'E) A\nB'
        ],
        answer: 'A',
        explanation: '类型转换异常'
      },
      {
        id: 291,
        title: 'Question 291',
        content: `Given the code fragment:\n\nif (aVar++ < 10) {\n    System.out.println(aVar + " Hello World!");\n} else {\n    System.out.println(aVar + " Hello Universe!");\n}\n\nWhat is the result if the integer aVar is 9?`,
        options: [
          'A) 10 Hello Universe!',
          'B) Compilation fails.',
          'C) 10 Hello World!',
          'D) 9 Hello World!'
        ],
        answer: 'C',
        explanation: '后置递增运算符'
      },
      {
        id: 292,
        title: 'Question 292',
        content: `Given the code fragment:\n\nint num [][] = new int [1][3];\nfor (int i = 0; i < num.length; i++) {\n    for (int j = 0; j < num[i].length; j++) {\n        num[i][j] = 10;\n    }\n}\n\nWhich option represents the of the state of the num array after successful completion ofthe outer loop?`,
        options: [
          'A) num[0][0] = 10\nnum[0][1] = 0\nnum[0][2] = 0',
          'B) num[0][0] = 10\nnum[1][0] = 10\nnum[2][0] = 10',
          'C) num[0][0] = 10\nnum[0][1] = 10\nnum[0][2] = 10\nnum[0][3] = 10\nnum[1][0] = 0\nnum[1][1] = 0\nnum[1][2] = 0\nnum[1][3] = 0',
          'D) num[0][0] = 10\nnum[0][1] = 10\nnum[0][2] = 10'
        ],
        answer: 'D',
        explanation: '二维数组初始化'
      },
      {
        id: 293,
        title: 'Question 293',
        content: `Given the code fragment:\n\npublic class ComputeSun{\n    public int x;\n    public int y;\n    public int sum;\n    public ComputeSum(int nx,int ny){\n        x=nx; y=ny;\n        updateSum();\n    }\n    public void setX(int nx){x=nx;updateSum();}\n    public void setY(int ny){x=ny;updateSum();}\n    void updateSum(){sum=x+y;}\n}\n\nThis class needs to protect an invariant on the sum field.\nWhich three members must have the private access modifier to ensure that this invariant is maintained?`,
        options: [
          'A.The x field',
          'B.The y field',
          'C.The sum field',
          'D.The ComputerSum()constructor',
          'E.The setX()method',
          'F.The setY()method'
        ],
        answer: 'C,E,F',
        explanation: '封装保护不变条件'
      },
      {
        id: 294,
        title: 'Question 294',
        content: `Given:\n\npublic class X implements Z {\n    public String toString(){\n        return "X";\n    }\n    public static void main(String[] args){\n        X myY = new Y();\n        X myX = myY;\n        Z myZ = myX;\n        System.out.print(myX);\n        System.out.print((Y)myX);\n        System.out.print(myZ);\n    }\n}\n\nclass Y extends X{\n    public String toString(){\n        return "Y";\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. X XX',
          'B. X Y X',
          'C. Y Y X',
          'D. Y YY'
        ],
        answer: 'D',
        explanation: '多态调用toString方法'
      },
      {
        id: 295,
        title: 'Question 295',
        content: `Given the code fragment:\n\nint a[] = {1,2,3,4,5};\nfor(XXX){\n    System.out.print(a[e]);\n}\n\nWhich option can replace xxx to enable the code to print 135?`,
        options: [
          'A. int e =0;e<=4;e++',
          'B. int e =0;e<5;e+=2',
          'C. int e =1;e<=5;e+=1',
          'D. int e =1;e<5;e+=2'
        ],
        answer: 'B',
        explanation: '正确遍历奇数索引元素'
      },
      {
        id: 296,
        title: 'Question 296',
        content: `Given the for loop construct:\n\nfor(expr1; expr2;expr3){\n    statment\n}\n\nWhich two statement are true?`,
        options: [
          'A) This is not the only valid for loop construct;there exits another from of for loop constructor;',
          'B) The expression expr1 is optional. it initializes the loop and is evaluated once, as the loop begin.',
          'C) When expr2 evaluates to false, the loop terminates. It is evaluated only after each iteration through the loop.',
          'D)The expression expr3 must be present. It is evaluated after each iteration through the loop.'
        ],
        answer: 'B,C',
        explanation: 'for循环的基本规则'
      },
      {
        id: 297,
        title: 'Question 297',
        content: `Given the code fragment\n\n//insert the code fragment\n\narr[0] = new int[3];\narr[0][0] = 1;\narr[0][1] = 2;\narr[0][2] = 3;\narr[1] = new int[4];\narr[1][0] = 10;\narr[1][1] = 20;\narr[1][2] = 30;\narr[1][3] = 40;\n\nWhich two statements, when inserted independently at line // insert code here, enable the code to compile?`,
        options: [
          'A. int[][] arr = null;',
          'B. int[][] arr = new int [2];',
          'C. int[][] arr = new int [2] [];',
          'D. int[][] arr = new int [] [4];',
          'E. int[][] arr = new int [2] [0];',
          'F. int[][] arr = new int [0] [4];'
        ],
        answer: 'C,E',
        explanation: '正确声明二维数组'
      },
      {
        id: 298,
        title: 'Question 298',
        content: `Given the following class declarations:\n\npublic abstract class Animal\npublic interface Hunter\npublic class Cat extends Animal implements Hunter\npublic class Tiger extends Cat\n\nWhich answer fails tocompile?`,
        options: [
          'A) ArrayList<Animal> myList = new ArrayList<>();\nmyList.add(new Tiger());',
          'B) ArrayList<Hunter> myList = new ArrayList<>();\nmyList.add(new Cat());',
          'C) ArrayList<Hunter> myList = new ArrayList<>();\nmyList.add(new Tiger());',
          'D) ArrayList<Tiger> myList = new ArrayList<>();\nmyList.add(new Cat());',
          'E) ArrayList<Animal> myList = new ArrayLIst<>();\nmyList.add(new Cat());'
        ],
        answer: 'E',
        explanation: '类型不兼容'
      },
      {
        id: 299,
        title: 'Question 299',
        content: `Given:\n\npublic class Series{\n    int arr[] = {1,2,3};\n    for (int var:arr){\n        int i = 1;\n        while(i <= var);\n        System.out.println(i++);\n    }\n}\n\nWhat is the result?`,
        options: [
          'A. 1\n1\n1',
          'B. 1\n2\n3',
          'C. 2\n3\n4',
          'D. Compilation fails',
          'E. The loop executes infinite times'
        ],
        answer: 'E',
        explanation: '死循环问题'
      },
      {
        id: 300,
        title: 'Question 300',
        content: `public class Cirle {\n    double radius;\n    public double area;\n    public Cirle(double r) {radius = r;}\n    public double getRadius() {return radius;}\n    public void setRadius(double r) {radius = r;}\n    public double getArea() { return /*???*/; }\n}\n\nclass App {\n    public static void main(String[] args) {\n        Cirle c1 = new Cirle(17.4);\n        c1.area = Math.PI*c1.getRadius()*c1.getRadius();\n    }\n}\n\nThe class is poorly encapsulated. You need to change the circle class to compute and return the area instead\n\nWhich two modifications are necessary to ensure that the class is being properly encapsulated?`,
        options: [
          'A: remove the Area field',
          'B: Change the getArea( ) method as follows: public double getArea ( ) { return Match.PI * radius * radius; }',
          'C: Add the following method: public double getArea ( ) {area = Match.PI * radius * radius; }',
          'D: Change the cacess modifier of the setRadius ( ) method to be protected.',
          'E: Make the method at line n1 public.'
        ],
        answer: 'B,D',
        explanation: '正确封装类的方法'
      },
      {
        id: 301,
        title: 'Question 301',
        content: `public class Student {\n    public String name ="";\n    public int age = 0;\n    public String major = "Undeclared";\n    public boolean fulltime = true;\n    public void display(){\n        System.out.println("Name:" + name + "Major:" + major);}\n    public boolean isFulltime(){\n        return fulltime;\n    }\n}\n\nWhich line of code initializes a student instance?`,
        options: [
          'A) Student student1;',
          'B) Student student1 = Student.new();',
          'C) Student student1 = new Student();',
          'D) Student student1 = Student();'
        ],
        answer: 'C',
        explanation: '正确实例化对象'
      },
      {
        id: 302,
        title: 'Question 302',
        content: `Given the code fragment:\n\nString[] cartoons = {"tom","jerry","micky","tom"};\nint counter =0;\nif ("tom".equals(cartoons[0])) {\n    counter++;\n} else if ("tom".equals(cartoons[1])) {\n    counter++;\n} else if ("tom".equals(cartoons[2])) {\n    counter++;\n} else if ("tom".equals(cartoons[3])) {\n    counter++;\n}\nSystem.out.print(counter);\n\nWhat is the result?`,
        options: [
          'A. 1',
          'B. 2',
          'C. 4',
          'D. 0'
        ],
        answer: 'A',
        explanation: '条件判断逻辑'
      },
      {
        id: 303,
        title: 'Question 303',
        content: `Which statement best describes encapsulation?`,
        options: [
          'A. Encapsulation ensures that classes can be designed so that only certain fields and methods of an object are accessible from other objects.',
          'B. Encapsulation ensures that classes can be designed so that their methods are inheritable.',
          'C. Encapsulation ensures that classes can be designed with some fields and methods declared as abstract.',
          'D. Encapsulation ensures that classes can be designed so that if a method has an argument MyType x, any subclass of MyType can be passed to that method.'
        ],
        answer: 'A',
        explanation: '封装的基本概念'
      },
      {
        id: 304,
        title: 'Question 304',
        content: `Given:\n\nMainTest.java:\npublic class MainTest {\n    public static void main (int[] args) {\n        System.out.println("int main " +args[0]);\n    }\n    public static void main (Object[] args) {\n        System.out.println("Object main " +args[0]);\n    }\n    public static void main (String[] args) {\n        System.out.println("String main " +args[0]);\n    }\n}\n\nand commands :\n\njavac MainTest.java\njava Maintest 1 2 3\n\nwhat is the result?`,
        options: [
          'A. int main 1',
          'B. Object main 1',
          'C. String main 1',
          'D. Compilation fails',
          'E. An exception is thrown at runtime'
        ],
        answer: 'C',
        explanation: 'main方法的标准签名'
      },
      {
        id: 305,
        title: 'Question 305',
        content: `Given the code fragment:\n\nfor (int ii = 0; ii < 3;ii++) {\n    int count = 0;\n    for (int jj = 3; jj > 0; jj--) {\n        if (ii == jj) {\n            ++count;\n            break;\n        }\n    }\n    System.out.print(count);\n    continue;\n}\n\nWhat is the result?`,
        options: [
          'A. 011',
          'B. 012',
          'C. 123',
          'D. 000'
        ],
        answer: 'A',
        explanation: '嵌套循环逻辑'
      },
      {
        id: 306,
        title: 'Question 306',
        content: `What is the proper way to defined a method that take two int values and returns their sum as an int value?`,
        options: [
          'A. int sum(int first, int second) { first + second; }',
          'B. int sum(int first, second) { return first + second; }',
          'C. sum(int first, int second) { return first + second; }',
          'D. int sum(int first, int second) { return first + second; }',
          'E. void sum (int first, int second) { return first + second; }'
        ],
        answer: 'D',
        explanation: '方法定义的正确语法'
      },
      {
        id: 307,
        title: 'Question 307',
        content: `Given the code fragment:\n\npublic static void main(String[] args) {\n\tShort s1 = 200;\n\tInteger s2 = 400;\n\tLong s3 = (long) s1 + s2;     //line n1\n\tString s4 = (String) (s3*s2);    //line n2\n\tSystem.out.println("Sum is" + s4);\n}\n\nWhat is the result?`,
        options: [
          'A: Compilation fails at line n2.',
          'B: Sum is 600',
          'C: Compilation fails at line n1.',
          'D: A classCastException is thrown at line n1.',
          'E: A ClassCastException is thrown at line n2.'
        ],
        answer: 'A',
        explanation: '1. At line n1, s1 (Short) can be cast to long type. s3 results in 600.\n2. At line n2, long type cannot be directly cast to String type, causing compilation failure.'
      },
      {
        id: 308,
        title: 'Question 308',
        content: `Given the following array:\nint[] intArr = {8, 16, 32, 64, 128};\nWhich two fragments, independently, print each element in this array?`,
        options: [
          'A: for (int i=0; i < intArr.length;i++) {\n\tSystem.out.println(intArr[i] +" ");\n}',
          'B: for (int i : intArr) {\n\tSystem.out.println(intArr[i] +" ");\n}',
          'C: for (int i=0; i < intArr.length;i++) {\n\tSystem.out.println(intArr[i] +" ");\n\ti++;\n}',
          'D: for (int i : intArr) {\n\tSystem.out.println(i +" ");\t\n}',
          'E: for (int i; i < intArr.length;i++) {\n\tSystem.out.println(intArr[i] +" ");\n}'
        ],
        answer: ['A', 'D'],
        explanation: 'Option A uses traditional for loop with index. Option D uses enhanced for loop (foreach). Both correctly print array elements.'
      },
      {
        id: 309,
        title: 'Question 309',
        content: `Given the code fragment:\n\nint x=100;\nint a=x++;  //100\nint b=++x;  //102\nint c=x++;  //102\nint d=(a<b)?(a<c)?a:(b<c)?b:c;\nSystem.out.println(d);\n\nwhat is the result?`,
        options: [
          'A. 102',
          'B. 103',
          'C. 101',
          'D. 100',
          'E. Compilation fails.'
        ],
        answer: 'E',
        explanation: 'The ternary operator is incorrectly defined. Proper ternary syntax requires matching ? and : operators. This expression is missing required : operators.'
      },  {
        id: 310,
        title: 'Question 310',
        content: `Given the code fragment:\n\npublic static void main(String[] args){\n  System.out.println("Result A"+0+1);\n  System.out.println("Result B"+(1)+(2)); \n}\n\nwhat is the result?`,
        options: [
          'A. Result A 1\n   Result B 3',
          'B. Result A 01\n   Result B 3',
          'C. Result A 1\n   Result B 12',
          'D. Result A 01\n   Result B 12'
        ],
        answer: 'D',
        explanation: '1. "Result A"+0+1 performs string concatenation: "Result A0" + "1" = "Result A01"\n2. (1)+(2) without proper parentheses also performs string concatenation: "Result B1" + "2" = "Result B12"'
      },
    
      {
        id: 311,
        title: 'Question 311',
        content: `Given the code fragment:\n\npublic static void main(String [] args){\n\tString str=" ";\n\tstr.trim();\n\tSystem.out.println(str.equals("")+" "+str.isEmpty());\n}\n\nWhat is the result?`,
        options: [
          'A: true false',
          'B: false false',
          'C: false true',
          'D: true true'
        ],
        answer: 'B',
        explanation: '1. str.trim()返回新字符串但不修改原str\n2. 原str包含空格，所以equals("")为false\n3. isEmpty()为false因为长度为1'
      }
    ].map((q, index) => ({
      ...q,
      options: q.options.map(opt => ({
        text: typeof opt === 'string' ? opt : opt.text,
        value: typeof opt === 'string' ? opt.split('.')[0].trim() : opt.value,
        selected: false
      })),
      // 强制设置为多选题
      multiSelect: true
    })),
    current: 0,
    showAnswer: false,
    touchStartX: 0,
    touchEndX: 0,
    showPreview: false,
    groupTabs: [],
    activeGroup: 0,
    visibleQuestions: [],
    scrollTop: 0
  },

  onLoad() {
    this.initQuestionGroups();
  },

  initQuestionGroups() {
    const groupSize = 50;
    const groups = [];
    const total = this.data.questions.length;
    
    for (let i = 0; i < total; i += groupSize) {
      const start = i + 1;
      const end = Math.min(i + groupSize, total);
      groups.push({ start, end });
    }
    
    this.setData({
      groupTabs: groups,
      visibleQuestions: this.getQuestionsForGroup(0)
    });
  },

  getQuestionsForGroup(groupIndex) {
    const groupSize = 50;
    const start = groupIndex * groupSize;
    const end = start + groupSize;
    
    return this.data.questions.slice(start, end).map((q, i) => ({
      ...q,
      index: start + i
    }));
  },

  handleSwitchGroup(e) {
    const groupIndex = e.currentTarget.dataset.index;
    this.setData({
      activeGroup: groupIndex,
      visibleQuestions: this.getQuestionsForGroup(groupIndex),
      scrollTop: 0
    });
  },

  getNumberClass(index) {
    const { current, showAnswer, visibleQuestions } = this.data;
    const question = visibleQuestions[index];
    const isCurrent = question.index === current;
    const isAnswered = showAnswer && question.options.some(opt => opt.selected);
    
    let classList = [];
    if (isCurrent) classList.push('active');
    if (isAnswered) classList.push('answered');
    return classList.join(' ');
  },

  handleJumpToQuestion(e) {
    const index = e.currentTarget.dataset.index;
    const groupIndex = Math.floor(index / 50);
    
    this.setData({
      current: index,
      showPreview: false,
      showAnswer: false,
      activeGroup: groupIndex,
      visibleQuestions: this.getQuestionsForGroup(groupIndex)
    });
    
    setTimeout(() => {
      const rowSize = Math.floor((wx.getSystemInfoSync().windowWidth - 40) / 90);
      const row = Math.floor((index % 50) / rowSize);
      this.setData({ scrollTop: row * 90 });
    }, 100);
  },

  handleTogglePreview() {
    this.setData({
      showPreview: !this.data.showPreview,
      activeGroup: Math.floor(this.data.current / 50),
      visibleQuestions: this.getQuestionsForGroup(Math.floor(this.data.current / 50))
    });
    
    if (!this.data.showPreview) {
      setTimeout(() => {
        const index = this.data.current % 50;
        const rowSize = Math.floor((wx.getSystemInfoSync().windowWidth - 40) / 90);
        const row = Math.floor(index / rowSize);
        this.setData({ scrollTop: row * 90 });
      }, 100);
    }
  },

  // 多选功能核心代码
  handleSelectOption(e) {
    const index = e.currentTarget.dataset.index;
    const currentQ = this.data.questions[this.data.current];
    
    // 多选题逻辑 - 直接切换选中状态
    currentQ.options[index].selected = !currentQ.options[index].selected;
    
    this.setData({
      [`questions[${this.data.current}].options`]: currentQ.options
    });
  },

  handleSubmitAnswer() {
    const currentQ = this.data.questions[this.data.current];
    const selectedOptions = currentQ.options.filter(opt => opt.selected);
    
    if (selectedOptions.length === 0) {
      wx.showToast({ title: '请至少选择一个选项', icon: 'none' });
      return;
    }
    
    this.setData({ showAnswer: true });
    
    // 自动跳转到下一题（可选）
    if (this.data.showAnswer && this.data.current < this.data.questions.length - 1) {
      setTimeout(() => {
        this.handleNextQuestion();
      }, 1500);
    }
  },

  handleNextQuestion() {
    if (this.data.current < this.data.questions.length - 1) {
      this.setData({
        current: this.data.current + 1,
        showAnswer: false
      });
    } else {
      wx.showToast({ title: '已经是最后一题', icon: 'none' });
    }
  },

  handlePrevQuestion() {
    if (this.data.current > 0) {
      this.setData({
        current: this.data.current - 1,
        showAnswer: false
      });
    }
  },

  handleTouchStart(e) {
    this.setData({ touchStartX: e.changedTouches[0].clientX });
  },

  handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - this.data.touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.handlePrevQuestion();
      } else {
        this.handleNextQuestion();
      }
    }
  }
});