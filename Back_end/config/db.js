// config/db.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // Sử dụng service key cho back-end

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
