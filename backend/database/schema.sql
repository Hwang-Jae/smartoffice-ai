CREATE TABLE document_meta
(
    id UUID,
    title String,
    owner String,
    format String,
    created_at DateTime,
    updated_at DateTime
)
ENGINE = MergeTree
ORDER BY id;

CREATE TABLE document_version
(
    document_id UUID,
    version UInt32,
    content String,
    created_at DateTime
)
ENGINE = MergeTree
ORDER BY
(
  document_id,
  version
);

CREATE TABLE ai_history
(
    id UUID,
    document_id UUID,
    prompt String,
    response String,
    created_at DateTime
)
ENGINE = MergeTree
ORDER BY
(
 document_id,
 created_at
);