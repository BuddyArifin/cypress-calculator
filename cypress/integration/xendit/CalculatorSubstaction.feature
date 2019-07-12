@tag-calculator
Feature: The Calculator

  I want be able to do subtraction
  
  @tag-subtraction
  Scenario Outline: I want be able to Subtraction
    Given I open Calculator page
    And I see calculator in the title
    And I want to add numbers <numOne> and <numTwo>
    Then I can see the result is result

  Examples:
  | numOne  | numTwo |
  | 4       | 2      |
  | 6       | 4      |
  | 10      | 8      |