//import {assessments, assessmentIds} from '../assessments';
var friendShipMaxHighScore = {
    score: 24,
    answers: {
        1: '1',
        2: '5',
        3: '1',
        4: '1',
        5: '5',
        6: '5' //score = 4
    }
};
var friendShipMinHighScore = {
    score: 19,
    answers: {
        1: '5',
        2: '4',
        3: '1',
        4: '1',
        5: '5',
        6: '5' //score = 4
    }
};
var friendShipMinLowScore = {
    score: 0,
    answers: {
        1: '5',
        2: '1',
        3: '5',
        4: '5',
        5: '1',
        6: '1' //score = 0
    }
};
// @see http://afterdeployment.dcoe.mil/sites/default/files/pdfs/assessment-tools/friendship-assessment.pdf
describe("Make sure Friendship Scale tests return expected results", function () {
    /*
    test('Friendship Scale High', () => {
      const friendAssess = assessments['1'];
      expect(friendAssess.scoringMode).toBe(0)
  
      //all heighest value answers scores should == 4
      Object.keys(friendShipMaxHighScore.answers).map((propName) => {
          let score = friendAssess.calcScore({[propName]: friendShipMaxHighScore.answers[propName]});
          
          expect(score).toBe(4);
      });
  
      expect(friendAssess.calcScore(friendShipMaxHighScore.answers)).toBe(friendShipMaxHighScore.score);
      expect(friendAssess.calcScore(friendShipMinHighScore.answers)).toBe(friendShipMinHighScore.score);
    });
  
    test('Friendship Scale Low', () => {
      const friendAssess = assessments['1'];
      expect(friendAssess.scoringMode).toBe(0)
  
      //all heighest value answers scores should == 4
      Object.keys(friendShipMinLowScore.answers).map((propName) => {
          let score = friendAssess.calcScore({[propName]: friendShipMinLowScore.answers[propName]});
          
          expect(score).toBe(0);
      });
  
      expect(friendAssess.calcScore(friendShipMinLowScore.answers)).toBe(friendShipMinLowScore.score);
  
    });
    */
});
var maritalSatMaxHighScore = {
    score: 158,
    answers: {
        1: '7',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
        8: '1',
        9: '1',
        10: '3',
        11: '1',
        12: '2',
        13: '4',
        14: '1',
        15: '3' //score = 10
    }
};
var maritalSatMinLowScore = {
    score: 2,
    answers: {
        1: '1',
        2: '6',
        3: '6',
        4: '6',
        5: '6',
        6: '6',
        7: '6',
        8: '6',
        9: '6',
        10: '1',
        11: '4',
        12: '3',
        13: '1',
        14: '2',
        15: '1' //score = 0
    }
};
/*
describe("Make sure Marital Satisfaction Scale tests return expected results", () => {

  test('Marital Satisfaction Is High', () => {
    const maritalAssess = assessments['2'];
    expect(maritalAssess.scoringMode).toBe(0);
    expect(maritalAssess.calcScore(maritalSatMaxHighScore.answers)).toBe(maritalSatMaxHighScore.score);
  });

  test('Marital Satisfaction Is Low', () => {
    const maritalAssess = assessments['2'];

    expect(maritalAssess.calcScore(maritalSatMinLowScore.answers)).toBe(maritalSatMinLowScore.score);

  });

});

*/
var percSuppMaxHighScore = {
    score: 84,
    answers: {
        1: '7',
        2: '7',
        3: '7',
        4: '7',
        5: '7',
        6: '7',
        7: '7',
        8: '7',
        9: '7',
        10: '7',
        11: '7',
        12: '7' //score = 7
    }
};
var percSuppMinLowScore = {
    score: 12,
    answers: {
        1: '1',
        2: '1',
        3: '1',
        4: '1',
        5: '1',
        6: '1',
        7: '1',
        8: '1',
        9: '1',
        10: '1',
        11: '1',
        12: '1' //score = 1
    }
};
describe("Make sure Perceived Social Support tests return expected results", function () {
    /*
     test('Perceived Social Support Is High', () => {
       const percSupportAssess = assessments['3'];
       expect(percSupportAssess.scoringMode).toBe(1);
   
       Object.keys(percSuppMaxHighScore.answers).map((propName) => {
           let score = percSupportAssess.calcScore({[propName]: percSuppMaxHighScore.answers[propName]});
   
           expect(score).toBe(7);
       });
   
       expect(percSupportAssess.calcScore(percSuppMaxHighScore.answers)).toBe(percSuppMaxHighScore.score);
     });
   
     test('Perceived Social Support Is Low', () => {
       const percSupportAssess = assessments['3'];
       
       Object.keys(percSuppMinLowScore.answers).map((propName) => {
           let score = percSupportAssess.calcScore({[propName]: percSuppMinLowScore.answers[propName]});
        
           expect(score).toBe(1);
       });
       expect(percSupportAssess.calcScore(percSuppMinLowScore.answers)).toBe(percSuppMinLowScore.score);
   
     });
     */
});
//# sourceMappingURL=assessment-test.js.map