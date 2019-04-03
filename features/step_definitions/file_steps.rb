Given(/^the following files exist:$/) do |xfile_table|
  xfile_table.hashes.each do |xfile|
    Xfile.create xfile
  end
end

And /^(?:|I )am on (.+)$/ do |page_name|
  visit path_to(page_name)
end

Then(/^I should see "([^"]*)"$/) do |text|
  if page.respond_to? :should
    page.should have_content(text)
  else
    assert page.has_content?(text)
  end
end

When(/^I click "([^"]*)" for "([^"]*)"$/) do |arg1, arg2|
  pending # Write code here that turns the phrase above into concrete actions
end

Then(/^I should see "([^"]*)"a"([^"]*)"a"([^"]*)"$/) do |arg1, arg2, arg3|
  pending # Write code here that turns the phrase above into concrete actions
end