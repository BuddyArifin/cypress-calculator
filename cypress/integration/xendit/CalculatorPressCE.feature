@tag-calculator
Feature: The Calculator

  I want be able to do reset number

  @tag-reset-calculator
  Scenario Outline: I want be able to reset number
    Given I open Calculator page
    And I see calculator in the title
    And I want to do division <numOne> with <numTwo>
    And I press CE button
    Then I can see the result is result

  Examples:
  | numOne  | numTwo |
  | 10      | 2      |
  | 25      | 5      |