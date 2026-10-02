from fastapi import APIRouter
from database.clickhouse import client
import uuid

router = APIRouter()

@router.post("/save")
async def save_document(payload: dict):

    document_id = str(uuid.uuid4())

    title = payload.get("title")
    content = payload.get("content")

    client.command(
        f"""
        INSERT INTO documents
        (
            document_id,
            title,
            content
        )

        VALUES
        (
            '{document_id}',
            '{title}',
            '{content}'
        )
        """
    )

    return {
        "status": "saved"
    }