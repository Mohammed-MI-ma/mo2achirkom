import pandas as pd
import random
from faker import Faker
import json

# Initialize Faker
fake = Faker()

def generate_fake_data(num_entries):
    data = []
    for _ in range(num_entries):
        demande_id = fake.random_number(digits=8, fix_len=True)
        menage_code = fake.random_number(digits=11, fix_len=True)
        type_demande_id = random.choice([6, 7, 8])
        type_demande_code = random.choice(["MJ", "MD", "MC"])
        statut_demande_id = random.choice([3, 4, 5])
        statut_demande_code = random.choice(["VD", "AC", "RJ"])
        source_demande_id = random.choice([1, 2, 3])
        source_demande_libelle_ar = random.choice(["عبر المركز", "عبر الموقع", "عبر الهاتف"])
        zone = random.randint(1, 5)
        membre_list = [
            {
                "membreScolarise": random.choice([True, False]),
                "saitlireEcrire": random.choice([True, False]),
                "_id": {
                    "$oid": fake.hexify(text='^' * 24)
                }
            }
            for _ in range(2)  # Generating 2 members per list
        ]
        score_gotten = round(random.uniform(0, 10), 2)

        entry = {
            "demandeId": str(demande_id),
            "menageCode": str(menage_code),
            "typeDemandeId": type_demande_id,
            "typeDemandeCode": type_demande_code,
            "statutDemandeId": statut_demande_id,
            "statutDemandeCode": statut_demande_code,
            "sourceDemandeId": source_demande_id,
            "sourceDemandelibelleAr": source_demande_libelle_ar,
            "zone": zone,
            "membreList": membre_list,
            "__v": 0,
            "scoreGotten": score_gotten
        }
        data.append(entry)
    
    return data

# Generate 1000 entries
fake_data = generate_fake_data(1000)

# Save to a JSON file
with open('fake_data.json', 'w', encoding='utf-8') as f:
    json.dump(fake_data, f, ensure_ascii=False, indent=4)

# Optional: Load the data into a DataFrame for better visualization
df = pd.DataFrame(fake_data)
print(df.head())
