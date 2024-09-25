import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://evxnwxeaprvobxovehby.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2eG53eGVhcHJ2b2J4b3ZlaGJ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzI5MDYwOCwiZXhwIjoyMDQyODY2NjA4fQ.qLOEdKetmZbR8xYeuea9gC_y9ZSTiWItLdrpHN81sSc",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2eG53eGVhcHJ2b2J4b3ZlaGJ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzI5MDYwOCwiZXhwIjoyMDQyODY2NjA4fQ.qLOEdKetmZbR8xYeuea9gC_y9ZSTiWItLdrpHN81sSc"
        
    }
})