@tag-calculator
Feature: The Calculator

  I want be able to do division

  @tag-division
  Scenario Outline: I want be able to Division
    Given I open Calculator page
    And I see calculator in the title
    And I want to do division <numOne> with <numTwo>
    Then I can see the result is result

  Examples:
  | numOne  | numTwo |
  | 10      | 2      |
  | 25      | 5      |