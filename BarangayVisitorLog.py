# Barangay Visitor Log

visitors = []

while True:
    # Step 2 & 3: Ask for visitor details
    name = input("Enter visitor name: ")
    purpose = input("Enter visitor purpose: ")

    # Step 4: Save information in the list
    visitor_record = [name, purpose]
    visitors.append(visitor_record)

    # Step 5: Ask if another visitor will be added
    choice = input("Add another visitor? (YES/NO): ").upper()

    # Step 6 & 7
    if choice != "YES":
        break

# Display all recorded visitors
print("\n--- BARANGAY VISITOR LOG ---")
for i, visitor in enumerate(visitors, start=1):
    print(f"{i}. Name: {visitor[0]} | Purpose: {visitor[1]}")

# Step 8: Display total number of visitors
print(f"\nTotal number of visitors recorded: {len(visitors)}")