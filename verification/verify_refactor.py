from playwright.sync_api import sync_playwright, expect

def verify_refactor(page):
    print("Navigating to Home Page (http://localhost:3001)...")
    page.goto("http://localhost:3001")
    page.wait_for_load_state("domcontentloaded")

    # 1. Check Hero Section (Server Component now)
    expect(page.get_by_role("heading", name="Empowering Your Digital Transformation")).to_be_visible()
    print("Hero Section loaded.")

    # 2. Check Success Story (Should have data from server)
    # The title is "Our Success Story"
    expect(page.get_by_role("heading", name="Our Success Story")).to_be_visible()
    print("Success Story section loaded.")

    # Check if we have at least one case study item.
    # They are likely inside headings or specific structure.
    # We can look for "Read Full Case Study" links.
    links = page.get_by_text("Read Full Case Study")
    count = links.count()
    if count > 0:
        print(f"Found {count} case studies.")
    else:
        # Fallback might be "Case studies are on the way" if server fetch returned empty and static data wasn't used properly
        # But our logic uses static fallback if props are empty.
        print("Warning: No 'Read Full Case Study' links found. Checking for fallback...")
        if page.get_by_text("Case studies are on the way").is_visible():
             print("Fallback empty state visible.")
        else:
             print("Unknown state for case studies.")

    # 3. Check "About LogZero Technologies" (was hardcoded in HomePageClient)
    expect(page.get_by_role("heading", name="About LogZero Technologies")).to_be_visible()
    print("About section loaded.")

    page.screenshot(path="verification/home_refactor.png")
    print("Screenshot saved to verification/home_refactor.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_refactor(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
