require "test_helper"

class OfficeControllerTest < ActionDispatch::IntegrationTest
  test "should get view" do
    get office_view_url
    assert_response :success
  end
end
