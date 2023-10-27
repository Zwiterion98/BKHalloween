import os
from supabase import create_client, Client

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")

db_client: Client = create_client(supabase_url, supabase_key)

def get_qr():
    return db_client.table("QRs").select("*").eq("valid", True).limit(1).execute().data

def update_qr(id):
    return db_client.table("QRs").update({"valid": False}).eq("id", id).execute()
 
def insert_qr(data):
    return db_client.table("QRs").insert(data).execute()