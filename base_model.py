#!/usr/bin/python3

import uuid
from datetime import datetime, timezone

class BaseModel :
    def __init__(self):
        self.id = str(uuid.uuid4())

    now = datetime.now(timezone.utc)
    self.created_at = now 
    self.updated_at = now

