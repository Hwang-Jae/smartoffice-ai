import subprocess

def convert_to_pdf(path):

    subprocess.run([
        "soffice",
        "--headless",
        "--convert-to",
        "pdf",
        path,
        "--outdir",
        "./storage/exports"
    ])

    return True
``