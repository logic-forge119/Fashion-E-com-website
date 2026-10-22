# Architecture and trust boundaries
Buildless HTML/CSS/JavaScript with hash router, render functions, demo state adapters, native dialog and browser storage. Data fixtures, product imagery and design tokens are in dist/index.html. cart/orders/favorites/offers use localStorage; identity and Buy Now use sessionStorage. Money uses whole BDT integers.

Production replacement: managed Supabase Auth; owner-scoped Postgres/RLS for orders and addresses; backend authoritative catalogue, discount, stock reservation, idempotency and provider/transaction uniqueness; private storage for evidence; trusted admin roles and audited review endpoints. Do not expose the demo studio or treat browser data as authority. No backend is currently connected.

References inspected: Aarong and SaRa homepages via public retrieval. Aarong content retrieval was limited largely to navigation; SaRa exposed category and campaign structure. No authenticated/mobile browser inspection performed. No reference-site artwork copied.
