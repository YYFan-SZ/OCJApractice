Page({
  data: {
    showQuestion: false,
    question: {
      title: 'Question 1',
      content: `Given:\n\npublic class TestTry {\n    public static void main (String[] args) {\n        StringBuilder message = new StringBuilder(\"hello java!\");\n        int pos =0;\n        try {\n            for ( pos = 0;pos < 12; pos++) {\n                switch (message.charAt(pos)) {\n                    case 'a':\n                    case 'e':\n                    case 'o':\n                     String uc=Character.toString(message.charAt(pos)).toUpperCase();\n                     message.replace(pos,pos+1,uc);\n                   }\n            }\n        } catch (Exception e) {\n            System.out.println(\"Out of limits\");\n        }\n        System.out.println(message);\n    }\n}\n\nWhat is the result?`,
      options: [
        'A. hEllOjAvA!',
        'B. Hello java!',
        'C. Out of limits hEllOjAvA!',
        'D. Out of limits'
      ],
      answer: 'C'
    }
  },
  showFirstQuestion() {
    wx.navigateTo({
      url: '/pages/doing/doing'
    });
  },
  goToDoing() {
    wx.navigateTo({
      url: '/pages/doing/doing'
    });
  }
}); 