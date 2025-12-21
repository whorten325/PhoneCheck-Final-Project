# Developer Manual

## Installation
1. Clone repo
2. Run `npm install`
3. Create `.env.local` with Supabase + Numverify keys

## Running
`npm run dev`
If error do thses in order:
1. npm install --save-dev serve
2. npx serve public
3. npm run dev

## API Endpoints
- POST /api/validate
- GET /api/searches
- GET /api/stats

## Known Issues
- No auth
- Basic validation only

## Future Work
- User accounts
- Better analytics
