# Fashion E-commerce Website — Master Draft & Agent Build Brief
Version: 1.0 | Date: 16 October 2026 | Market: Bangladesh | Currency: BDT

## 1. Agent mission and priority
Build a polished, responsive, fully clickable fashion storefront from this specification. This is a consolidated product draft, design brief, interaction specification and implementation handoff.

Read this document completely, inspect the existing repository and preserve unrelated work. Implement the experience, rather than returning only advice or wireframes. If starting fresh, use sensible defaults below. Document assumptions and blockers; continue all independent work.

Latest requirement takes precedence: **customers MUST log in before checkout, buying, placing an order or submitting payment. Guest checkout is not allowed.** Earlier suggestions of guest checkout are superseded.

First deliver a complete clickable frontend with realistic demo content. Architect it so real authentication, database, stock and payment review can be connected without replacing the UI. Never describe a frontend simulation as production authentication or a verified financial integration.

## 2. Product goal and brand
Create a Bangladesh-focused clothing shop with strong photography, easy size selection, clear delivery costs, mandatory authenticated purchasing and manual transaction-ID payment verification.

Target customers: students and young adults seeking everyday and seasonal fashion. Start with Men, Women and Kids, but make categories configurable; hide empty categories.

Temporary brand label: YOUR BRAND. This is a replaceable placeholder, not a final naming decision.
Default language: consistent English UI, with clear Bangla payment guidance where helpful.
All monetary amounts use BDT; business scheduling uses Asia/Dhaka.

Brand configuration must include name, logo, contact channels, social links, currency, category labels, policy content, campaign images and payment settings. Never invent real addresses, credentials, reviews or payment accounts.

## 3. References and originality
References:
- Aarong: https://www.aarong.com/bgd
- SARA Lifestyle: https://saralifestyle.com/

Inspect accessible homepage, navigation, collection, product and mobile experiences before implementation. State access limitations honestly. These are inspiration directions, not claims that every requested feature currently exists on either reference.

Aarong-inspired direction: category clarity, thoughtful collection storytelling, culturally relevant fashion presentation and product-focused composition.
SARA-inspired direction: campaign-led discovery, collection entry points and seasonal promotional merchandising.

Create an original identity. Do not copy logos, product descriptions, photos, campaign artwork or entire page designs. Use user-supplied assets, appropriately licensed assets, or clearly labeled placeholders.

## 4. Visual system
Recommended starting palette:
- Background: #FAF9F6
- Surface: #FFFFFF
- Main text: #1F1F1F
- Muted text: #666666
- Borders: #E5E2DD
- Offer accent: #B91C1C
- Offer background: #FEF2F2

Adjust colors if needed for accessible contrast. Red is primarily for discounts and selected highlights. Error messages must also contain explanatory text.

Use readable typography, generous whitespace, consistent buttons, subtle borders and restrained shadows. Use a Bengali-capable font when rendering Bangla. Establish reusable tokens for spacing, typography, colors and motion.

Product photographs lead the design. Use consistent card image proportions, preferably 3:4 for clothing. Avoid generic dashboard styling and excessive decorative effects.

## 5. Route map
Public:
- / — Home
- /shop — Catalogue
- /collections/:slug — Collection
- /products/:slug — Product details
- /cart — Cart
- /login, /register, /forgot-password, /reset-password
- /about, /contact
- /policies/delivery, /policies/returns, /policies/privacy, /terms
- Helpful 404 page

Authenticated:
- /checkout
- /orders/:id/payment
- /orders/:id/confirmation
- /account
- /account/orders
- /account/orders/:id
- /account/addresses

Admin:
- /admin
- /admin/products
- /admin/orders
- /admin/payments
- /admin/campaigns
- /admin/offers
- /admin/settings

Client route guards improve UX; backend authorization is also mandatory for production.

## 6. Homepage composition
1. Header: brand, category navigation, search, account and cart count.
2. Main campaign hero.
3. Red discount slideshow immediately below the hero.
4. Category tiles.
5. New Arrivals.
6. Featured seasonal collection.
7. Best Sellers, only if backed by real sales; otherwise use Featured Products.
8. Short brand story.
9. Delivery, exchange and support summary.
10. Footer with contact, policies and social links.

Use a compact sticky header without covering content. Mobile navigation opens an accessible drawer. Search and cart are functional. No dead buttons, empty anchor links or unimplemented primary actions.

## 7. Campaign hero
Support separate desktop and mobile images, heading, supporting text, CTA label and collection destination. Use HTML text for essential content rather than baking all copy into images.

One campaign may be static. Multiple campaigns may use a controlled slider. Provide navigation, pause and swipe support where appropriate. Maintain readable contrast and avoid cropping the subject on mobile. Optimize the first image rather than lazy-loading it.

## 8. Red offer slideshow — required
Place a horizontal promotional strip directly below the main campaign image.

Visual:
- Light red background, readable dark red text.
- Bold red percentage badge such as 20% OFF.
- Short offer description and optional coupon.
- Responsive fixed/minimum height to prevent page jumps.
- Mobile text wraps gracefully without clipping or horizontal overflow.

Behavior:
- One offer at a time.
- Auto-change around every 4–5 seconds with a 300–450 ms fade or vertical slide.
- Previous, next and pause controls.
- Pause on hover, keyboard focus and hidden browser tab.
- Reduced-motion users receive a static initial offer with manual navigation.
- Clicking an offer opens its relevant collection or detail.
- Hide the strip when there are no active offers.

Admin fields:
headline, percentage/amount, short description, coupon, destination, applicable products/collections, minimum spend, usage limits where relevant, start/end time, priority and enabled flag.

Rules:
- Schedule in Asia/Dhaka, evaluate expiry on the trusted server in production.
- Displayed and checkout discounts use the same pricing rule.
- Clarify selected items, maximum discount and exclusions.
- Do not claim all items are 30% off when the offer is only up to 30%.
- Define stacking explicitly; default to one applicable promotion at a time.
- Never use fake countdowns, fake original prices or fabricated urgency.

Demo examples must be marked as sample promotions.

## 9. Catalogue and product experience
Catalogue:
- Search by product name/category.
- Filter by category, size, color, price and availability.
- Sort by newest and price ascending/descending.
- Clear filters and useful no-results state.
- Persist selected filters in URL when practical.
- Product count and usable pagination or Load More.

Product cards:
image, name, BDT price, genuine sale information, color indicators and stock state. Clicking opens product details. Quick Add must request required variants.

Product detail:
- Front/back/detail gallery, thumbnails and zoom.
- Product name, SKU, price and description.
- Color and size selection, stock by variant.
- Size chart with inch/cm and garment/body measurement identified.
- Fabric, fit, care instructions and available model measurements.
- Quantity, Add to Cart and Buy Now.
- Delivery/return summary and links.
- Related products based on real category relationships.

Unavailable variants are disabled. Changing a color updates relevant photos when available. Add to Cart is blocked until required options are chosen. Do not fabricate ratings, fabric composition or performance claims.

## 10. Authentication — mandatory for purchase
Public visitors may browse, search, filter and build a cart.

When a signed-out visitor clicks Buy Now or Proceed to Checkout:
1. Preserve cart and selected product variants.
2. Open or navigate to login with a safe internal return destination.
3. Offer registration and password reset.
4. After successful authentication, resume the intended checkout.
5. Never create an order or accept payment submission before authentication.

Buy Now must preserve its selected item. Explain whether it checks out that item alone; default to a single-item checkout without deleting the existing cart.

Required screens:
- Registration: name, email, password and confirmation.
- Login: email/password, show/hide password and clear errors.
- Email verification guidance when the provider requires it.
- Forgot/reset password and expired-link states.
- Logout, loading state and session-expiry handling.
- Account profile, addresses and order history.

Production recommendation: managed authentication such as Supabase Auth. Use provider-managed password storage, sessions, verification and recovery; never store plaintext passwords. Google sign-in is optional and only shown when configured.

Validate return destinations to avoid open redirects. Merge guest cart with account cart deterministically and recheck stock. Preserve non-sensitive checkout fields after session expiry. All payment submissions and order endpoints enforce user identity and ownership.

Admin permissions come from trusted backend roles, never a user-editable profile field or frontend localStorage value.

## 11. Clickable frontend and demo boundaries
Frontend must be navigable end to end:
Home → Collection → Product → Cart → Login/Register → Checkout → Payment Instructions → Transaction Submission → Pending Confirmation → Account Order Details.

Provide a clearly labeled demo mode when backend credentials are unavailable:
- Use sample catalogue and configurable sample promotions.
- Persist demo cart, wishlist if included, and non-sensitive preferences locally.
- Offer a clearly labeled simulated account flow; do not collect/store real passwords.
- Display “Demo — no real payment” on payment screens.
- Use “PAYMENT ACCOUNT NOT CONFIGURED”, not a plausible fake payment number.
- Demo order creation and admin review must be labeled simulated.
- Never allow a demo flag to bypass production auth/authorization.
- Demo transactions and admin state must not be confused with real customer data.

Backend services should have a clear interface so demo adapters can be replaced with real services.

## 12. Cart and checkout
Cart supports update/remove, selected variants, stock feedback, subtotal and empty state.

Checkout is login-only and collects:
name, delivery phone, district/area, full address and optional note. Email comes from the authenticated account or is confirmed explicitly.

Summary:
product subtotal, valid discount, delivery charge and final payable total.

Compute authoritative totals on the backend. Store order-time snapshots of product name, variant, unit price, discounts and delivery address.

Prevent duplicate orders from repeated clicks/retries through idempotent order creation. Disable submission during processing and allow recovery after network failure.

Delivery fees and estimated times are configurable. Do not invent guaranteed arrival promises. Display terms and policy links before order submission.

## 13. Manual payment with transaction ID
Initial options: approved bKash/Nagad business payment accounts and optional COD if enabled by the business. Do not assume a personal account is suitable; use the business-approved account type and accurate provider instructions.

Flow:
Authenticated checkout → Awaiting Payment order → Instructions → Customer pays externally → Transaction details submitted → Verification Pending → Admin checks → Verified or Rejected.

Instructions show:
provider, approved receiver account/name/type, exact amount, order reference and copy buttons. Explain how to enter a reference only where the method supports one.

Never request PIN, OTP, wallet password or card credentials.

Submission fields:
- Payment method
- Transaction ID
- Sender phone
- Amount paid
- Payment time when needed
- Optional screenshot

Button: Submit Payment for Verification.
Success: “Your payment details have been submitted. Payment verification is pending.”

Submitting an ID is not proof of payment. Never mark paid automatically from an ID or screenshot.

Validation:
- Provider-aware ID validation without invented rigid formats.
- Normalize IDs according to provider rules.
- Backend/database uniqueness for the provider + transaction ID claim.
- Reject duplicate concurrent submissions safely.
- Rejected claims stay in history; any correction/release is an audited admin process.
- Amount mismatch requires review; do not silently change order totals.
- Payment belongs to the authenticated user's order.
- Screenshot is optional, private and not sufficient by itself.

Admin review:
Show order total, submitted details and history together. Reviewer checks actual business payment records, receiver, amount and transaction reference. Record reviewer, time and decision reason. No automatic wallet integration is implied.

Rejected submissions show a safe explanation and allow correction. Keep attempt history. Rejecting a claim is not automatically a refund or proof that funds were never received.

Do not send users to make another payment merely because a review is delayed.

## 14. Status and stock rules
Payment states:
unpaid, verification_pending, verified, rejected, refund_pending, refunded.

Order states:
placed, confirmed, processing, shipped, delivered, cancelled, delivery_failed, returned.

Show friendly labels. Payment and order statuses are independent. Prepaid orders cannot move to fulfilment until verified; enabled COD has its own unpaid-on-delivery workflow.

Inventory is tracked per SKU/size/color. Reserve stock for a configurable period when an awaiting-payment order is created. Define expiry, release and pending-review handling. Submitted payments awaiting review should not be silently cancelled by the ordinary unpaid timeout.

Late payment or expired reservation requires manual reconciliation and customer contact, not automatic paid fulfilment without stock. Use transactional stock operations to prevent overselling. Restore stock once when appropriate; avoid duplicate restocking.

## 15. Order/account experience
Authenticated confirmation and order details show:
order number, item/variant snapshots, totals, delivery address, payment state, order timeline and support.

Tracking is an honest status timeline. Courier live maps are not implied. Admin may add courier and tracking reference.

Customer sees only their own orders. An unpredictable ID is useful but is not a substitute for ownership checks. Account logout must remove private displayed state from shared-device sessions.

Return/exchange request UI should explain eligibility, reason and business review. Policies must cover damaged/wrong goods, size exchange, shipping cost and refund processing.

## 16. Animation specification
Use motion to explain state and give polish:

| Element | Effect | Duration |
| --- | --- | --- |
| Hero text | Subtle fade and upward reveal | 500–700 ms |
| Offer strip | Fade or vertical slide | 300–450 ms |
| Section entry | Small fade-up, once | 350–500 ms |
| Product hover | Slight image scale, about 1.03 | 200–300 ms |
| Buttons | Hover/press/focus feedback | 150–200 ms |
| Cart/menu | Drawer and overlay | 250–350 ms |
| Size/color choice | Border/background transition | 150–200 ms |
| Gallery | Gentle image fade | 200–300 ms |
| Submission | Brief checkmark and status feedback | 250–400 ms |

Requirements:
- Prefer transform and opacity.
- Avoid large parallax, flashing red, continuous bounce and aggressive page transitions.
- Scroll reveals occur once and never hide content if JS fails.
- Honor prefers-reduced-motion across all animations.
- Hover effects are enhancements, not requirements on touch devices.
- Manage focus, Escape key and focus trapping in dialogs/drawers.
- Restore focus when overlays close; prevent background scrolling appropriately.
- Do not animate prices in ways that obscure the real total.
- No forced delay before checkout or payment interaction.

## 17. Admin scope
Provide distinct admin screens for:
- Products, images, variants, SKU and stock.
- Orders, payment and fulfilment.
- Pending payment review, evidence and decision history.
- Hero campaigns and mobile/desktop assets.
- Offer slideshow and schedule.
- Delivery fees, policies and approved payment configuration.

Use confirmation for destructive actions. Prefer archiving products referenced in orders. Log critical changes to prices, stock, account settings and payment decisions. Demo admin is clearly separate; real admin routes require trusted roles.

## 18. Suggested architecture and data
If existing technology is suitable, keep it. For a fresh project, a reasonable default is React + TypeScript + Vite, responsive CSS, a router and Supabase for eventual Auth/Postgres/Storage. Do not add a complex dependency without a reason.

Separate UI components, pages, service adapters, validation, models and shared design tokens. Use maintained dependency versions appropriate to the environment.

Conceptual entities:
- auth users and profiles
- addresses
- categories, collections, collection_products
- products, product_images, product_variants
- inventory and reservations/movements
- carts, cart_items
- campaigns, offers and scope rules
- orders, order_items
- payment_submissions, payment_reviews
- shipments
- return_requests
- audit_logs and business_settings

Use fixed precision or integer minor units for money. Never use floating-point rounding inconsistently. Database constraints support unique SKUs, transaction claims and idempotency. RLS/access policies limit customer data to its owner; admin authorization is explicit. Public product access excludes private operational fields.

## 19. Security, privacy and reliability
- HTTPS, managed sessions and secure provider-supported auth flows.
- Server-side validation and authorization for all protected actions.
- Trusted server totals, stock and discount calculation.
- Private payment evidence with bounded access.
- Upload MIME/type/size validation and safe filenames.
- Rate limits on login-related custom endpoints, order creation and payment submission.
- Keep server secrets outside frontend bundles and Git.
- No sensitive information in logs or analytics.
- Prevent HTML/script injection in editable content.
- Backups, recovery instructions and error monitoring before real launch.
- No real customer/payment data in seed fixtures.

Frontend guards alone are insufficient. Production readiness must not be claimed until real auth, database policies, payment review and stock handling are verified.

## 20. Performance, accessibility and discovery
Responsive layouts should work around 360 px mobile, tablet and wide desktop without overflow.

Use optimized responsive images, reserved image dimensions, lazy loading below the fold and modest font loading. Provide loading skeletons, errors, empty states and retry actions.

Meet practical WCAG AA principles: contrast, labels, keyboard flow, visible focus, adequate targets and meaningful alt text. Do not auto-announce every promotional slide aggressively.

Add distinct page titles, descriptions, share metadata, canonical URLs, sitemap and truthful product structured data where supported. Never expose customer/admin pages in search indexing. Do not fabricate availability, ratings or prices in structured data.

## 21. Business and content requirements
Before live operation obtain:
brand/logo, licensed photos, actual SKU inventory, prices, measurements, fabric/care data, campaigns, offer rules, payment accounts, delivery rates/times, support contact and policies.

Policies must describe delivery, exchange, returns, refund handling and privacy. Customer support should use a real configured channel; do not publish dummy WhatsApp or email links.

Analytics may measure product views, cart adds, checkout drop-off and completed orders without collecting unnecessary personal data.

Account for hosting, database, image storage, messaging, payment/courier and maintenance costs. Keep development and production configurations separate.

## 22. Repository and handoff
Create/update:
- README.md — overview, screenshots, setup, scripts, demo boundaries and deployment.
- PRD.md — final requirements and acceptance criteria.
- ARCHITECTURE.md — components, data flow and trust boundaries.
- TASKS.md — completed, remaining and blocked work.
- .env.example — names and placeholders only.
- Database migrations and seed/demo instructions when backend is implemented.
- TESTING.md — important verified flows and unresolved limitations.
- PAYMENT_WORKFLOW.md — transaction submission, review and reconciliation.

Do not overwrite existing workflow files or unrelated content. Report changed files and verification results. Do not claim tests that were not run.

## 23. Implementation sequence
1. Inspect repository and this brief; record assumptions.
2. Establish design tokens and responsive main screens.
3. Build catalogue, gallery, variant selection and cart.
4. Implement login/register/reset screens and protected purchase flow.
5. Implement checkout, payment submission and order account screens.
6. Add admin UI, campaigns and red offer management.
7. Connect real services when available; keep demo boundaries explicit.
8. Add restrained animation and reduced-motion behavior.
9. Verify interactions, permissions, pricing and responsive layouts.
10. Complete docs and provide run/build/deployment instructions.

Create reviewable desktop/mobile homepage, product, login, checkout and payment screens early; continue implementation without unnecessary confirmation for reversible design choices.

## 24. Acceptance checklist
- [ ] All navigation, filters, controls and primary buttons work.
- [ ] Direct links and browser back/forward work.
- [ ] Cart persists with correct variants and quantities.
- [ ] Buy Now and Checkout require login; no guest checkout.
- [ ] Login returns the user to intended purchase without losing cart.
- [ ] Real APIs reject unauthenticated order/payment requests.
- [ ] Customer cannot read another user's order or payment proof.
- [ ] Offer strip appears immediately below hero with red percentage.
- [ ] Active/expired offers and checkout calculation agree.
- [ ] Slideshow has manual/pause controls and reduced-motion behavior.
- [ ] Stock and totals are trusted-server validated in live mode.
- [ ] Transaction submission becomes pending, never automatically verified.
- [ ] Duplicate transaction and duplicate order attempts are handled.
- [ ] Admin verification/rejection includes reviewer and history.
- [ ] Late payments, review delays and stock expiry have recovery paths.
- [ ] Demo payment contains no usable account and accepts no real money.
- [ ] Empty, error, loading and submission-success states are complete.
- [ ] Mobile, keyboard and reduced-motion paths are usable.
- [ ] No fake reviews, fake discounts, dead controls or exposed secrets.
- [ ] Appropriate build/type checks and meaningful flow checks pass.
- [ ] Final handoff distinguishes frontend-complete from production-ready.

## 25. Completion report required from the agent
Provide:
1. What was implemented and how to run it.
2. Main routes and interactions available.
3. Demo features versus real connected services.
4. Checks performed and actual outcomes.
5. Remaining configuration or credentials needed.
6. Known limitations and next steps for live operation.

Deliver an operational clickable frontend, not only an attractive homepage. Do not imply real authentication, payment verification or delivery integration where only simulation exists.

