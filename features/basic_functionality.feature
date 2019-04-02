Feature: display list of files and show file information
 
  As a calcentral developer
  So that I can see overlapping fields for models
  I want to upload files corresponding to each model and see their contents.

Background: files have been added to database
  
  Given the following files exist:
  | title                   | rating |
  | sample1                 | {"a": "a"}     |
  | sample2                 | {"b": "b"}     |
  | sample3                 | {"c": "c"}     |

  And I am on the File Parser home page

Scenario: see all the files
  Given I am on the home page
  Then I should see "sample1"
  And I should see "sample2"
  And I should see "sample3"

Scenario: see file contents
  When I click "more info" for "sample1"
  Then I should see "{"a": "a"}"
