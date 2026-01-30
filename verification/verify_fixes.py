from playwright.sync_api import sync_playwright, expect

def verify_fixes(page):
    # 1. Check Contact Us page (Recaptcha load)
    # The folder is Contact-Us, so the route is likely /Contact-Us
    print("Navigating to Contact Us (/Contact-Us)...")
    page.goto("http://localhost:3000/Contact-Us")
    page.wait_for_load_state("domcontentloaded")

    # Check if page loaded
    expect(page.get_by_role("heading", name="Get In Touch")).to_be_visible()
    print("Contact Us page loaded.")

    # Take screenshot of Contact Us
    page.screenshot(path="verification/contact_us.png")
    print("Screenshot saved to verification/contact_us.png")

    # 2. Check Blog Category Page (Params fix)
    print("Navigating to Blog Category: Dev...")
    page.goto("http://localhost:3000/blog/category/dev")
    page.wait_for_load_state("domcontentloaded")

    # Check if page loaded (should see "Dev Insights" or similar based on dynamic slug)
    expect(page.get_by_role("heading", name="Dev Insights & Best Practices")).to_be_visible()
    print("Blog Category page loaded.")

    # Take screenshot of Blog Category
    page.screenshot(path="verification/blog_category.png")
    print("Screenshot saved to verification/blog_category.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_fixes(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
