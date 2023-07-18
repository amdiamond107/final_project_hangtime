"""empty message

Revision ID: 82e78101d0c5
Revises: 7c5907f4f1c4
Create Date: 2023-07-13 10:23:52.725313

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '82e78101d0c5'
down_revision = '7c5907f4f1c4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.add_column(sa.Column('spots_remaining', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.drop_column('spots_remaining')

    # ### end Alembic commands ###
