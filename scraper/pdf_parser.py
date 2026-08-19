"""
BU Jhansi B.Tech Result Gazette PDF Extractor
Extracts student tables from official university result PDF files using pdfplumber
"""

import pdfplumber
import json
import re
import sys

def parse_result_pdf(pdf_path, output_json="pdf_results.json"):
    print(f"[*] Parsing Result Gazette PDF: {pdf_path} ...")
    extracted_students = []

    try:
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages):
                print(f"[*] Extracting Page {i + 1} of {len(pdf.pages)}...")
                tables = page.extract_tables()

                for table in tables:
                    for row in table:
                        if not row or len(row) < 4:
                            continue
                        
                        # Look for roll number pattern (e.g., 210010501001)
                        roll_match = re.search(r'\b\d{12}\b', str(row[0]))
                        if roll_match:
                            roll_no = roll_match.group(0)
                            name = str(row[1]).strip()
                            sgpa_val = str(row[-1]).strip()

                            try:
                                sgpa = float(sgpa_val)
                            except ValueError:
                                sgpa = 0.0

                            extracted_students.append({
                                "rollNo": roll_no,
                                "name": name,
                                "sgpa": sgpa,
                                "page": i + 1
                            })

        with open(output_json, "w", encoding="utf-8") as f:
            json.dump(extracted_students, f, indent=2)

        print(f"[✓] Successfully extracted {len(extracted_students)} records to {output_json}")

    except Exception as e:
        print(f"[!] Error parsing PDF {pdf_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        parse_result_pdf(sys.argv[1])
    else:
        print("Usage: python pdf_parser.py <path_to_result_gazette.pdf>")
